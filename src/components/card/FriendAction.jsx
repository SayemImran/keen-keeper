"use client";

import { Phone, MessageSquare, Video } from "lucide-react";

const FriendActions = ({ user }) => {
  const handleContact = (type) => {
    const information = {
      name: user.name,
      contactType: type,
      dateTime: new Date().toISOString(),
    };
    console.log("Contacted", information);
  };

  return (
    <div className="rounded-xl shadow-sm p-6">
      <h2 className="text-xl text-green-900 mb-4">Quick Check-In</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          onClick={() => handleContact("call")}
          className="flex flex-col items-center justify-center bg-gray-200 rounded-lg py-6 cursor-pointer hover:bg-gray-300 transition"
        >
          <Phone className="w-6 h-6 text-gray-700 mb-2" />
          <span className="text-gray-700 font-medium">Call</span>
        </div>

        <div
          onClick={() => handleContact("message")}
          className="flex flex-col items-center justify-center bg-gray-200 rounded-lg py-6 cursor-pointer hover:bg-gray-300 transition"
        >
          <MessageSquare className="w-6 h-6 text-gray-700 mb-2" />
          <span className="text-gray-700 font-medium">Text</span>
        </div>

        <div
          onClick={() => handleContact("video")}
          className="flex flex-col items-center justify-center bg-gray-200 rounded-lg py-6 cursor-pointer hover:bg-gray-300 transition"
        >
          <Video className="w-6 h-6 text-gray-700 mb-2" />
          <span className="text-gray-700 font-medium">Video</span>
        </div>
      </div>
    </div>
  );
};

export default FriendActions;
