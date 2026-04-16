import FriendsCard from "@/components/card/Card";
import data from "../../../public/data.json";
const FriendsPage = () => {
    return (
        <div className="mt-10 mb-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((friend) => (
                <FriendsCard key={friend.id} friend={friend} />
            ))}
        </div>
    );
};

export default FriendsPage;