import Link from "next/link";
import React from "react";

function UpComingEventList() {
  return (
    <li>
      <Link href={"#"} className="flex items-center gap-x-2.5">
        <div className="dark:bg-dark-400 px-2.5 py-1.5 rounded-md flex flex-col items-center gap-y-1">
          <strong className="block dark:text-white text-xs/3">20</strong>
          <span className="text-[10px]/3 dark:text-white/40">Dec</span>
        </div>
        <div className="translate-y-0.5">
          {/* Text */}
          <h2 className="text-sm font-medium dark:text-white text-primaryBlack line-clamp-1">
            Product Designer at Google Architech
          </h2>
          <span className="text-xs dark:text-primaryWhite text-primaryBlack -translate-y-1 inline-block">
            78k interested - 7k going
          </span>
        </div>
      </Link>
    </li>
  );
}

export default UpComingEventList;
