import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Encounters</h1>

        {/* Date and distance */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">May 26</h2>
          <div className="flex items-center mt-1">
            <span className="text-purple
            -500">Open to chat</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-orange-600">70 km away</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* About me section */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">About me</h3>
          <p className="mt-2 text-orange-600">I'm a little good girl 😊</p>

          {/* Relationship basics */}
          <div className="mt-4">
            <h4 className="font-medium text-gray-800">
              My rela <span className="text-purple
              -500">✅</span> basics
            </h4>
            <ul className="mt-2 space-y-1">
              <li className="flex items-center">
                <span className="text-purple
                -500 mr-2">•</span>
                <span className="text-orange-600">Open to chat</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple
                -500 mr-2">•</span>
                <span className="text-orange-600">Straight</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action buttons would go here */}
      <div className="px-6 py-4 bg-gray-50 flex justify-between">
        <button className="px-4 py-2 bg-red-100 text-red-500 rounded-full font-medium">
          Pass
        </button>
        <button className="px-4 py-2 bg-green-100 text-purple
        -500 rounded-full font-medium">
          Like
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
