import data from "../../../public/data.json";

const Homepage = () => {
  const friendsCount = data.length;

  return (
    <>
      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-4 mt-10 sm:mt-16 text-center">

        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="bg-green-900 rounded-md px-4 py-2 text-white font-semibold text-sm sm:text-base w-full sm:w-auto">
          + Add Friend
        </button>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">

        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-5 sm:p-6">
          <p className="text-green-900 text-2xl sm:text-3xl font-semibold">
            {friendsCount}
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Total friends
          </p>
        </div>

        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-5 sm:p-6">
          <p className="text-green-900 text-2xl sm:text-3xl font-semibold">
            3
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            On track
          </p>
        </div>

        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-5 sm:p-6">
          <p className="text-green-900 text-2xl sm:text-3xl font-semibold">
            6
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Need attention
          </p>
        </div>

        <div className="flex flex-col items-center justify-center shadow-md rounded-md p-5 sm:p-6">
          <p className="text-green-900 text-2xl sm:text-3xl font-semibold">
            12
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Interactions this month
          </p>
        </div>

      </div>
    </>
  );
};

export default Homepage;