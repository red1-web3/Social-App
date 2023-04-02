import Image from "next/image";
import Link from "next/link";
import React from "react";

function Post() {
  return (
    <article className="rounded-md _border dark:bg-dark-500 p-3">
      <header className="grid grid-cols-[40px,auto] gap-x-2 items-center">
        <Link href={"#"}>
          <Image
            src={"/profile-img.jpg"}
            height={40}
            width={40}
            alt="Profile image"
            className="object-cover rounded-full aspect-square"
          />
        </Link>

        <div>
          <input
            type="text"
            className="w-full dark:bg-dark-400 outline-none dark:text-slate-200 text-black placeholder:opacity-50 rounded-full py-2 px-5"
            placeholder="What's on your mind?"
          />
        </div>
      </header>
    </article>
  );
}

export default Post;
