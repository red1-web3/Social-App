import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function Post() {
  return (
    <article className="rounded-md _border dark:bg-dark-500 pt-3">
      <Header />
      <Main />
      <Footer />
    </article>
  );
}

export default Post;
