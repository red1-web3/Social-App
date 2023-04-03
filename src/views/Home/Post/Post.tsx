import React from "react";
import CreatePost from "./CreatePost/CreatePost";

function Post() {
  return (
    <article className="rounded-md _border dark:bg-dark-500 p-3">
      <CreatePost />
    </article>
  );
}

export default Post;
