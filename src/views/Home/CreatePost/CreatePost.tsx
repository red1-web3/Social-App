import Edit from "@components/Icons/Edit";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createPostIconData } from "src/constant/Post";

function CreatePost() {
  return (
    <article className="rounded-md _border dark:bg-dark-500 p-3 space-y-5">
      {/* Header --Start-- */}
      <header className="grid grid-cols-[40px,auto] gap-x-2.5 items-center">
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

        <div>
          <input
            type="text"
            className="w-full dark:bg-dark-400 outline-none dark:text-slate-200 text-black placeholder:opacity-50 rounded-full py-2.5 pr-5 pl-6"
            placeholder="What's on your mind?"
          />
        </div>
      </header>
      {/* Header --End-- */}

      {/* Footer --Start-- */}
      <footer className="flex items-center justify-between pl-2">
        {/* Icons --Start-- */}
        <ul className="flex items-center gap-x-3.5">
          {createPostIconData.map(({ icon }, i) => (
            <li key={i} className="dark:text-primaryWhite text-primaryBlack">
              <button>{icon}</button>
            </li>
          ))}
        </ul>
        {/* Icons --End-- */}

        {/* Submit Buttons --Start-- */}
        <div className="flex items-center gap-x-4">
          <button className="flex dark:text-primaryWhite text-primaryBlack items-center gap-x-1">
            <Edit />
            <span className="text-xs">Draft</span>
          </button>

          <button className="px-6 py-1 rounded _borderLight text-xs dark:text-primaryWhite text-primaryBlack">
            Post
          </button>
        </div>
        {/* Submit Buttons --End-- */}
      </footer>
      {/* Footer --End-- */}
    </article>
  );
}

export default CreatePost;
