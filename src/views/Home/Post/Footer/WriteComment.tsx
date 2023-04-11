import Send from "@components/Icons/Send";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { writeCommentIcon } from "src/constant/Post";

function WriteComment() {
  return (
    <div className="grid grid-cols-[40px,auto] gap-x-2.5 items-center py-4 mb-1">
      <Link href={"#"} className="relative">
        <Image
          src={"/profile-img.jpg"}
          height={40}
          width={40}
          alt="Profile image"
          className="object-cover rounded-full aspect-square"
        />
        <span className="absolute inset-0 bg-black/30 rounded-full z-[1]"></span>
      </Link>

      <div className="relative rounded-full overflow-hidden">
        <input
          type="text"
          className="peer w-full dark:bg-dark-400 outline-none dark:text-slate-200 text-black placeholder:opacity-50 py-2.5 pr-36 pl-6"
          placeholder="What's on your mind?"
        />

        {/* Send button --Start-- */}
        {/* <button
          name="submitComment"
          className="absolute top-1/2 -translate-y-1/2 right-3 w-[22px] dark:text-dark-100 dark:hover:text-dark-50 duration-200"
        >
          <Send />
        </button> */}
        {/* Send button --End-- */}

        <ul className="flex items-center gap-x-4 absolute top-1/2 -translate-y-1/2 right-5">
          {writeCommentIcon.map(({ icon }, i) => (
            <li
              key={i}
              className="dark:text-dark-100 leading-3 dark:hover:text-dark-50 duration-200 text-primaryBlack"
            >
              <button>{icon}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WriteComment;
