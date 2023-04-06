import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

function Post() {
  return (
    <article className="rounded-md _border dark:bg-dark-500 p-3">
      <Header />
      <Main />
    </article>
  );
}

export default Post;
