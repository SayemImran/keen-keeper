import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import data from "../../../../public/data.json";
import FriendActions from "@/components/card/FriendAction";


const FriendsDetails = async ({ params }) => {
  const { friendId } = await params;
  const user = data.find((u) => u.id === parseInt(friendId));

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 mb-10 mt-10">
      {/* Left sidebar */}
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col justify-center items-center gap-1 shadow-md rounded-md p-6 w-full">
          <img
            src={user.picture}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <p className="text-lg font-semibold">{user.name}</p>

          {/* tag */}
          {user.tags?.length > 0 && (
            <div className="mt-3">
              <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
                {user.tags[0].toUpperCase()}
              </span>
            </div>
          )}

          {/* status */}
          <div className="mt-3">
            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                user.status === "overdue"
                  ? "bg-red-500 text-white"
                  : user.status === "almost due"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-500 text-white"
              }`}
            >
              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
            </span>
          </div>
          <p className="italic text-gray-400">{`"${user.bio}"`}</p>
          <p>Preferred: email</p>
        </div>

        <div className="flex gap-1 justify-center items-center px-3 py-3 rounded-md shadow-md w-full font-semibold">
          <button className="flex gap-1 items-center">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </button>
        </div>
        <div className="flex gap-1 justify-center items-center px-3 py-3 rounded-md shadow-md w-full font-semibold">
          <button className="flex gap-1 items-center">
            <FiArchive />
            Archive
          </button>
        </div>
        <div className="w-full flex justify-center gap-1 items-center text-red-500 px-3 py-3 rounded-md shadow-md font-semibold">
          <button className="flex gap-1 items-center">
            <RiDeleteBinLine />
            Delete
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="col-span-2 flex flex-col space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-10 flex flex-col items-center justify-center rounded-md shadow-md">
            <span className="text-3xl font-semibold text-green-900">
              {user.days_since_friend}
            </span>
            <p className="text-md text-gray-400">Days since contact</p>
          </div>
          <div className="p-10 flex flex-col items-center justify-center rounded-md shadow-md">
            <span className="text-3xl font-semibold text-green-900">
              {user.goal}
            </span>
            <p className="text-md text-gray-400">Goal (Days)</p>
          </div>
          <div className="p-10 flex flex-col items-center justify-center rounded-md shadow-md">
            <span className="text-3xl font-semibold text-green-900">
              {user.next_due_date}
            </span>
            <p className="text-md text-gray-400">Next due date</p>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 flex items-start justify-between">
            <div>
              <h2 className="text-2xl text-green-900">Relationship Goal</h2>
              <p className="mt-2 text-gray-600 text-base">
                Connect every{" "}
                <span className="font-bold text-gray-900">30 days</span>
              </p>
            </div>
            <button className="px-4 py-1.5 text-sm bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 font-bold">
              Edit
            </button>
          </div>
        </div>

        <FriendActions user={user} />
      </div>
    </div>
  );
};

export default FriendsDetails;