import Image from "next/image";
import Link from "next/link";
import React from "react";

function WriteComment() {
  return (
    <div className="grid grid-cols-[40px,auto] gap-x-2.5 items-center py-4">
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
    </div>
  );
}

export default WriteComment;
