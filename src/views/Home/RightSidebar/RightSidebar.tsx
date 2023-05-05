import SingleCommunity from "./JoinCommunity/JoinCommunity";
import Trending from "./Trending/Trending";
import UserFriends from "./UserFriends/UserFriends";

function RightSidebar() {
  return (
    <div className="space-y-5">
      <Trending />
      <SingleCommunity />
      <UserFriends />
    </div>
  );
}

export default RightSidebar;
