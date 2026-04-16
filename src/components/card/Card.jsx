'use client';
import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friend }) => {
 
  
  const { name, picture, days_since_friend, status, tags } = friend;

  return (
    <Link href={`/friends/${friend.id}`} className="no-underline">
    <div className="bg-gray-100 rounded-2xl shadow-md px-8 w-[300px] py-6 text-center mx-auto">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image src={picture} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold mt-4 text-gray-800">{name}</h2>

      {/* Days since friend */}
      <p className="text-gray-500 text-sm mt-1">{days_since_friend}d ago</p>

      {/* Tag (first tag only like screenshot) */}
      {tags?.length > 0 && (
        <div className="mt-3">
          <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
            {tags[0].toUpperCase()}
          </span>
        </div>
      )}

      {/* Status */}
      <div className="mt-3">
        <span
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            status === "overdue"
              ? "bg-red-500 text-white"
              : status === "almost due"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-green-500 text-white"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
    </Link>
  );
};

export default FriendsCard;
