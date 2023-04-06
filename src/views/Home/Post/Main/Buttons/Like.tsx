import ThumbUp from "@components/Icons/ThumbUp";
import classNames from "classnames";
import React, { useState } from "react";

function Like() {
  const [isLiked, setIsLiked] = useState(false);
  const [countedLikes, setCountedLikes] = useState(0);
  function clickedLike() {
    setCountedLikes((prev) => prev + 1);
    setIsLiked((prev) => !prev);
  }

  return (
    <button
      className="text-light-200 py-4 flex justify-center items-center gap-x-2"
      onClick={clickedLike}
    >
      <div
        className={classNames(
          "w-fit flex items-center gap-x-2 text-sm",
          isLiked ? "text-primary" : "dark:text-light-700"
        )}
      >
        <span className="w-5">
          <ThumbUp />
        </span>
        <span>Like post</span>
      </div>

      {countedLikes ? (
        <div className="bg-primary px-3 py-0.5 rounded-2xl text-xs text-light-200">
          {countedLikes}
        </div>
      ) : null}
    </button>
  );
}

export default Like;
