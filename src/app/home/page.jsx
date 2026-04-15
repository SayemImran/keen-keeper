import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <h1 className="font-bold text-5xl">Friends to keep close in your life</h1>
      </div>
      <div className="">
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div><button className="bg-green-900 rounded-md px-3 py-2 text-white font-semibold">+Add Friend</button></div>
    </div>
  );
};

export default Homepage;
