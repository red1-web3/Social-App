import React from "react";
import Trending from "./Trending/Trending";
import SingleCommunity from "./SingleCommunity/SingleCommunity";

function RightSidebar() {
  return (
    <div className="space-y-5">
      <Trending />
      <SingleCommunity />
    </div>
  );
}

export default RightSidebar;
