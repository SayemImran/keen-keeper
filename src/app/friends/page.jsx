import FriendsCard from "@/components/card/Card";
import data from "../../../public/data.json";
import { Suspense } from "react";
const FriendsPage = () => {
  return (
    <div className="mt-10 mb-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Suspense
        fallback={
          <span className="loading loading-spinner text-success"></span>
        }
      >
        {data.map((friend) => (
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </Suspense>
    </div>
  );
};

export default FriendsPage;
