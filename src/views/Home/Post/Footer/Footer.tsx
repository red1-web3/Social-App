import React from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments/Comments";
import ViewComments from "./Comments/ViewComments";

function Footer() {
  return (
    <footer className="px-3">
      <WriteComment />
      <Comments />
      <ViewComments />
    </footer>
  );
}

export default Footer;
