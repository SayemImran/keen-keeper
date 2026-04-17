import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import data from "../../../../public/data.json";
import FriendActions from "@/components/card/FriendAction";

const FriendsDetails = async ({ params }) => {
  const { friendId } = await params;
  const user = data.find((u) => u.id === parseInt(friendId));

  if (!user) return <div className="p-6">User not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-2 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 mb-10 mt-10">
      {/* LEFT SIDEBAR */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center gap-2 shadow-md rounded-md p-5 sm:p-6 w-full text-center">
          <img
            src={user.picture}
            alt={user.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
          />

          <p className="text-lg font-semibold">{user.name}</p>

          {/* tag */}
          {user.tags?.length > 0 && (
            <span className="mt-2 bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              {user.tags[0].toUpperCase()}
            </span>
          )}

          {/* status */}
          <span
            className={`mt-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
              user.status === "overdue"
                ? "bg-red-500 text-white"
                : user.status === "almost due"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-500 text-white"
            }`}
          >
            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
          </span>

          <p className="italic text-gray-400 text-sm mt-2">{`"${user.bio}"`}</p>

          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        {/* ACTION BUTTONS */}
        <button className="flex gap-2 items-center justify-center px-3 py-3 rounded-md shadow-md w-full font-semibold text-sm sm:text-base">
          <RiNotificationSnoozeLine /> Snooze 2 weeks
        </button>

        <button className="flex gap-2 items-center justify-center px-3 py-3 rounded-md shadow-md w-full font-semibold text-sm sm:text-base">
          <FiArchive />
          Archive
        </button>

        <button className="flex gap-2 items-center justify-center w-full text-red-500 px-3 py-3 rounded-md shadow-md font-semibold text-sm sm:text-base">
          <RiDeleteBinLine />
          Delete
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="lg:col-span-2 flex flex-col space-y-6">
        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 sm:p- flex flex-col items-center justify-center rounded-md shadow-md text-center">
            <span className="text-2xl sm:text-3xl font-semibold text-green-900">
              {user.days_since_friend}
            </span>
            <p className="text-sm sm:text-md text-gray-400">
              Days since contact
            </p>
          </div>

          <div className="p-6 sm:p-8 flex flex-col items-center justify-center rounded-md shadow-md text-center">
            <span className="text-2xl sm:text-3xl font-semibold text-green-900">
              {user.goal}
            </span>
            <p className="text-sm sm:text-md text-gray-400">Goal (Days)</p>
          </div>

          <div className="p-6 sm:p-8 flex flex-col items-center justify-center rounded-md shadow-md text-center">
            <span className="text-2xl sm:text-3xl font-semibold text-green-900">
              {user.next_due_date}
            </span>
            <p className="text-sm sm:text-md text-gray-400">Next due date</p>
          </div>
        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="bg-gray-100 rounded-xl shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl text-green-900">
              Relationship Goal
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Connect every{" "}
              <span className="font-bold text-gray-900">30 days</span>
            </p>
          </div>

          <button className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 font-bold w-fit">
            Edit
          </button>
        </div>

        <FriendActions user={user} />
      </div>
    </div>
  );
};

export default FriendsDetails;
