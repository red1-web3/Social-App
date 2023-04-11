import React from "react";
import WriteComment from "./WriteComment";
import Comments from "./Comments/Comments";

function Footer() {
  return (
    <footer className="px-3">
      <WriteComment />
      <Comments />
    </footer>
  );
}

export default Footer;
