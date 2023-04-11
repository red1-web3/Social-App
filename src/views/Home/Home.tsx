import React from "react";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import { useHeaderHeight } from "@state/index";

const Home = () => {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <main style={{ marginTop: headerHeight }} className="space-y-4">
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Home;
