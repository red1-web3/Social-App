import CheckWithBg from "@components/Icons/CheckWithBg";
import Image from "next/image";
import React from "react";

function PorfilePart() {
  return (
    <aside className="flex items-center gap-x-4">
      {/* Left Side --Start-- */}
      <div className="flex items-center gap-x-3"></div>
      {/* Left Side --End-- */}

      {/* User Profile --Start-- */}
      <div className="flex items-center gap-x-2">
        <p className="dark:text-white text-base tracking-wider">Red1 A</p>
        <div className="relative">
          <Image
            src={"/profile-img.JPG"}
            height={40}
            width={40}
            alt="Profile image"
            className="rounded-full"
          />
          <span className="absolute inset-0 bg-black/20 rounded-full z-[1]"></span>
          <span className="dark:text-white absolute bottom-0 right-0.5 z-[2] w-3.5">
            <CheckWithBg />
          </span>
        </div>
      </div>
      {/* User Profile --End-- */}
    </aside>
  );
}

export default PorfilePart;
