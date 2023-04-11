import ArrowDown from "@components/Icons/ArrowDown";
import ArrowUp from "@components/Icons/ArrowUp";
import Reply from "@components/Icons/Reply";
import Image from "next/image";
import React from "react";

function UserComment() {
  return (
    <div className="flex items-start gap-x-2.5 px-3">
      <Image
        src={"/user-profile-2.jpg"}
        alt="User profile image"
        height={35}
        width={35}
        className="rounded-full"
      />

      <div className="space-y-4">
        {/* Name and Comment --Start-- */}
        <div>
          <h4 className="dark:text-light-200 font-semibold shrink-0 inline">
            Emma valerio:
          </h4>
          <p className="inline dark:text-light-700 text-sm pl-1 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet
            natus doloremque ipsa quos repudiandae perspiciatis voluptates est
            obcaecati qui.
          </p>
        </div>
        {/* Name and Comment --End-- */}

        {/* Reply and Vote --Start-- */}
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-x-1 dark:text-light-200 ">
            <span className="rotate-180">
              <Reply />
            </span>
            <span className="text-sm">Reply comment</span>
            <span className="bg-dark-400 px-1.5 py-0.5 rounded-full text-xs ml-1.5">
              15
            </span>
          </button>

          <div className="flex items-center gap-x-2 text-sm dark:text-light-200">
            <button className="flex items-center">
              <ArrowUp />
              Upvote
            </button>
            |
            <button className="flex items-center">
              <ArrowDown />
              Downvote
            </button>
          </div>
        </div>
        {/* Reply and Vote --End-- */}
      </div>
    </div>
  );
}

export default UserComment;
