import Time from "@components/Icons/Time";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-x-3">
          <Image
            src="/user-profile.jpg"
            alt="Profile image"
            height={42}
            width={42}
            className="rounded-full"
          />
          <div>
            <h3 className="dark:text-light-200 text-primaryBlack">
              Amile jackson
            </h3>
            <div className="flex items-center gap-x-1">
              <p className="flex items-center text-xs dark:text-light-700 gap-x-1">
                <span className="translate-y-[1px]">
                  <Time />
                </span>
                <span>12 minutes ago on</span>
              </p>
              <strong className="dark:text-light-200 text-primaryBlack text-xs">
                3d stock contributor
              </strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
