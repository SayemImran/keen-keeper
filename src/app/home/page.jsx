import data from "../../../public/data.json";

const Homepage = () => {
const friendsCount = data.length;
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 mt-15">
        <div>
          <h1 className="font-bold text-5xl">
            Friends to keep close in your life
          </h1>
        </div>
        <div className="">
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <button className="bg-green-900 rounded-md px-3 py-2 text-white font-semibold">
            +Add Friend
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-6"><p className="text-green-900 text-3xl font-semibold">{friendsCount}</p><p className="text-gray-400">Total friends</p></div>
        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-6"><p className="text-green-900 text-3xl font-semibold">3</p><p className="text-gray-400">On track</p></div>
        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-6"><p className="text-green-900 text-3xl font-semibold">6</p><p className="text-gray-400">Need attention</p></div>
        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-6"><p className="text-green-900 text-3xl font-semibold">12</p><p className="text-gray-400">Interactions this month</p></div>
      </div>
    </>
  );
};

export default Homepage;
