"use client";

import { useState } from "react";
import {
  useGetUser,
  UserProfile,
  RelationshipStatus,
  Gender,
  Drinking,
  Smoking,
  ReasonForJoining,
} from "../../hooks/useGetUser";

// Helper function to format enum values
const formatEnum = (value: number, enumObj: any) => {
  return enumObj[value] || value.toString();
};

// Helper function to format arrays
const formatArray = (array: any[]) => {
  return array.length > 0 ? array.join(", ") : "None";
};

// Helper function to format address
const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export function LikeAddressInput() {
  const [address, setAddress] = useState("");
  const { userProfile, isLoading, error } = useGetUser(address);

  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter user address (0x...)"
        className="p-2 border rounded"
      />

      {isLoading && address && (
        <p className="text-gray-500">Loading user profile...</p>
      )}

      {userProfile && (
        <div className="p-4 border rounded bg-gray-50 space-y-4">
          <h3 className="font-bold text-xl mb-4">User Profile</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Info Section */}
            <div className="space-y-2">
              <h4 className="font-semibold text-lg border-b pb-1">
                Basic Info
              </h4>
              <p>
                <span className="font-medium">User Address:</span>{" "}
                {formatAddress(userProfile.user)}
              </p>
              <p>
                <span className="font-medium">ENS:</span>{" "}
                {userProfile.ens || "Not set"}
              </p>
              <p>
                <span className="font-medium">Registered:</span>{" "}
                {userProfile.registered ? "Yes" : "No"}
              </p>
              <p>
                <span className="font-medium">Registration Time:</span>{" "}
                {new Date(
                  Number(userProfile.resgistrationTime) * 1000
                ).toLocaleString()}
              </p>
            </div>

            {/* Personal Details Section */}
            <div className="space-y-2">
              <h4 className="font-semibold text-lg border-b pb-1">
                Personal Details
              </h4>
              <p>
                <span className="font-medium">Status:</span>{" "}
                {formatEnum(userProfile.relationshipStatus, RelationshipStatus)}
              </p>
              <p>
                <span className="font-medium">Gender:</span>{" "}
                {formatEnum(userProfile.gender, Gender)}
              </p>
              <p>
                <span className="font-medium">Interested In:</span>{" "}
                {formatEnum(userProfile.interestedIn, Gender)}
              </p>
              <p>
                <span className="font-medium">Height:</span>{" "}
                {userProfile.height}
              </p>
              <p>
                <span className="font-medium">Description:</span>{" "}
                {userProfile.description || "Not provided"}
              </p>
            </div>

            {/* Lifestyle Section */}
            <div className="space-y-2">
              <h4 className="font-semibold text-lg border-b pb-1">Lifestyle</h4>
              <p>
                <span className="font-medium">Drinking:</span>{" "}
                {formatEnum(userProfile.drinking, Drinking)}
              </p>
              <p>
                <span className="font-medium">Smoking:</span>{" "}
                {formatEnum(userProfile.smoking, Smoking)}
              </p>
              <p>
                <span className="font-medium">Reason for Joining:</span>{" "}
                {formatEnum(userProfile.reason, ReasonForJoining)}
              </p>
              <p>
                <span className="font-medium">Hobbies:</span>{" "}
                {formatArray(userProfile.hobbies)}
              </p>
            </div>

            {/* Social Section */}
            <div className="space-y-2">
              <h4 className="font-semibold text-lg border-b pb-1">Social</h4>
              <p>
                <span className="font-medium">Likes Received:</span>{" "}
                {userProfile.likes.length}
              </p>
              <p>
                <span className="font-medium">Tips Received:</span>{" "}
                {userProfile.tipsReceived.toString()}
              </p>
              <p>
                <span className="font-medium">Tippers:</span>{" "}
                {formatArray(userProfile.tippers.map((t) => formatAddress(t)))}
              </p>
            </div>

            {/* NFT Section */}
            <div className="space-y-2">
              <h4 className="font-semibold text-lg border-b pb-1">NFT</h4>
              {userProfile.profilePictureNFT ? (
                <div className="flex flex-col items-start">
                  <img
                    src={userProfile.profilePictureNFT}
                    alt="Profile NFT"
                    className="w-32 h-32 object-cover rounded border"
                  />
                  <a
                    href={userProfile.profilePictureNFT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 mt-1"
                  >
                    View NFT
                  </a>
                </div>
              ) : (
                <p>No profile picture NFT</p>
              )}
            </div>
          </div>
        </div>
      )}

      {error && (
        <p className="text-red-500 text-sm text-center p-2 bg-red-50 rounded">
          {error.message}
        </p>
      )}
    </div>
  );
}
