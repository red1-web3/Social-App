import React from "react";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

const Home = () => {
  return (
    <main className="space-y-4">
      <CreatePost />
      <Post />
    </main>
  );
};

export default Home;
