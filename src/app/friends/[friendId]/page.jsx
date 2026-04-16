import data from "../../../../public/data.json";
const FriendsDetails = async ({ params }) => {
  const { friendId } = await params;
  const user = data.find((u) => u.id === parseInt(friendId));
  console.log(user);
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default FriendsDetails;
