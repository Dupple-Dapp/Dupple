// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./libraries/Events.sol";
import "./libraries/Errors.sol";
import "./libraries/Enums.sol";

import "openzeppelin-contracts/contracts/access/Ownable.sol";

contract Dupple is Ownable {
    string[] public allowedHobbies;

    constructor() Ownable(msg.sender) {
        allowedHobbies = [
            "Reading", "Gaming", "Cooking", "Sports", "Music", "Travel", "Relaxing", "Football",
            "barbecues", "cuddles", "meeting people", "Tennis", "writing", "Horror", "Coffee",
            "Baking", "Hiking", "Gardening", "Foodie", "skiing", "Museums and galleries", "Wine",
            "Art", "Coding", "Festivals"
        ];
    }

    struct UserProfile {
        address user;
        string ens;
        string description;
        string profilePictureNFT;
        string[] pictureNFTs;
        string[] hobbies;
        address[] likes;
        address[] dislikes;
        Enums.RelationshipStatus relationshipStatus;
        uint8 height; // 1 to 5
        Enums.ReasonForJoining reason;
        Enums.Drinking drinking;
        Enums.Smoking smoking;
        Enums.Gender gender;
        Enums.Gender interestedIn;
        uint dailyMessagesSent;
        uint tipsReceived;
        address[] tippers;
        bool registered;
    }

    struct Message {
        string content;
        uint timestamp;
    }

    mapping(address => UserProfile) public users;
    mapping(address => mapping(address => Message[])) public messages;
    mapping(address => mapping(address => bool)) public liked;
    mapping(address => mapping(address => bool)) public disliked;
    mapping(address => mapping(address => bool)) public blocked;
    mapping(address => mapping(address => bool)) public matches;
    mapping(address => address[]) public userMatches;

    address[] public allUsers;
    uint public dailyMessageLimit = 30;

    modifier onlyRegistered() {
        require(users[msg.sender].registered, "Not registered");
        _;
    }

    function register(
        string memory _ens,
        string memory _description,
        string memory _profilePic,
        Enums.Gender _interestedIn,
        Enums.Gender _gender,
        Enums.RelationshipStatus _rs,
        uint8 _height,
        uint[] memory hobbyIndices,
        Enums.ReasonForJoining _reason,
        Enums.Drinking _drinking,
        Enums.Smoking _smoking
    ) external {
        require(!users[msg.sender].registered, "Already registered");
        require(hobbyIndices.length > 0, "Pick at least one hobby");

        string[] memory selectedHobbies = new string[](hobbyIndices.length);
        for (uint i = 0; i < hobbyIndices.length; i++) {
            uint index = hobbyIndices[i];
            require(index < allowedHobbies.length, "Invalid hobby index");
            selectedHobbies[i] = allowedHobbies[index];
        }

        UserProfile storage profile = users[msg.sender];
        profile.user = msg.sender;
        profile.ens = _ens;
        profile.description = _description;
        profile.profilePictureNFT = _profilePic;
        profile.hobbies = selectedHobbies;
        profile.relationshipStatus = _rs;
        profile.height = _height;
        profile.reason = _reason;
        profile.drinking = _drinking;
        profile.smoking = _smoking;
        profile.gender = _gender;
        profile.interestedIn = _interestedIn;
        profile.registered = true;

        allUsers.push(msg.sender);
    }

    function uploadPictureNFT(string memory uri) external onlyRegistered {
        users[msg.sender].pictureNFTs.push(uri);
    }

    function updateDescription(string memory _desc) external onlyRegistered {
        users[msg.sender].description = _desc;
    }

    function sendMessage(address to, string memory content) external onlyRegistered {
        require(users[to].registered, "Recipient not found");
        require(!blocked[to][msg.sender], "You are blocked");
        require(users[msg.sender].dailyMessagesSent < dailyMessageLimit, "Daily limit reached");

        messages[msg.sender][to].push(
            Message({ content: content, timestamp: block.timestamp })
        );

        users[msg.sender].dailyMessagesSent++;
    }

    function getMessages(address withUser) external view onlyOwner returns (Message[] memory) {
        return messages[msg.sender][withUser];
    }

    function updateProfilePicture(string memory uri) external onlyRegistered {
        users[msg.sender].profilePictureNFT = uri;
    }

    function like(address user) external onlyRegistered {
        require(!liked[msg.sender][user], "Already liked");
        liked[msg.sender][user] = true;
        users[msg.sender].likes.push(user);

        if (liked[user][msg.sender]) {
            matches[msg.sender][user] = true;
            matches[user][msg.sender] = true;
            userMatches[msg.sender].push(user);
            userMatches[user].push(msg.sender);
        }
    }

    function dislike(address user) external onlyRegistered {
        require(!disliked[msg.sender][user], "Already disliked");
        disliked[msg.sender][user] = true;
        users[msg.sender].dislikes.push(user);
    }

    function accept(address user) external onlyRegistered {
        require(liked[user][msg.sender], "Not yet liked");

        matches[msg.sender][user] = true;
        matches[user][msg.sender] = true;
        userMatches[msg.sender].push(user);
        userMatches[user].push(msg.sender);
    }

    function hasLiked(address user) external view returns (bool) {
        return liked[msg.sender][user];
    }

    function hasDisliked(address user) external view returns (bool) {
        return disliked[msg.sender][user];
    }

    function undo(address user) external onlyRegistered {
        liked[msg.sender][user] = false;
        disliked[msg.sender][user] = false;
    }

    function getMatches() external view returns (address[] memory) {
        return userMatches[msg.sender];
    }

    function blockUser(address user) external onlyRegistered {
        blocked[msg.sender][user] = true;
    }

    function isBlocked(address user) external view returns (bool) {
        return blocked[msg.sender][user];
    }

    function resetDailyMessages(address user) external onlyOwner {
        users[user].dailyMessagesSent = 0;
    }

    function tip(address user) external payable onlyRegistered {
        require(users[user].registered, "Recipient not found");
        require(user != msg.sender, "Cannot tip yourself");

        users[user].tipsReceived += msg.value;
        users[user].tippers.push(msg.sender);

        (bool success, ) = user.call{value: msg.value}("");
        require(success, "Transfer failed");
    }

    function getTippers() external view returns (address[] memory) {
        return users[msg.sender].tippers;
    }

    function getTipReceived() external view returns (uint) {
        return users[msg.sender].tipsReceived;
    }

    function payToReturnTop10Percent() external payable onlyRegistered returns (UserProfile[] memory) {
        require(msg.value >= 0.001 ether, "Insufficient fee");

        uint total = allUsers.length;
        require(total > 0, "No users registered");

        uint topCount = total / 10;
        if (topCount == 0) topCount = 1;

        // Create temporary array
        UserProfile[] memory tempUsers = new UserProfile[](total);
        for (uint i = 0; i < total; i++) {
            tempUsers[i] = users[allUsers[i]];
        }

        // Sort by number of likes (descending)
        for (uint i = 0; i < total; i++) {
            for (uint j = 0; j < total - 1; j++) {
                if (tempUsers[j].likes.length < tempUsers[j + 1].likes.length) {
                    UserProfile memory tmp = tempUsers[j];
                    tempUsers[j] = tempUsers[j + 1];
                    tempUsers[j + 1] = tmp;
                }
            }
        }

        // Slice top N
        UserProfile[] memory topUsers = new UserProfile[](topCount);
        for (uint i = 0; i < topCount; i++) {
            topUsers[i] = tempUsers[i];
        }

        return topUsers;
    }

    function getENS(address user) external view returns (string memory) {
        return users[user].ens;
    }

    function changeDailyMessageLimit(uint num) external onlyOwner {
        dailyMessageLimit = num;
    }

    function withdrawFromContract() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Transfer failed");
    }
}
