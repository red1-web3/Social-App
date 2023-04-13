import React from "react";
import Trending from "./Trending/Trending";
import SingleCommunity from "./JoinCommunity/JoinCommunity";
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
