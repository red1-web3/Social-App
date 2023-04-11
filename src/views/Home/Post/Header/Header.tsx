import React from "react";
import Profile from "./Profile";
import Bookmark from "@components/Icons/Bookmark";
import Dots from "@components/Icons/Dots";

function Header() {
  return (
    <header className="space-y-3.5 pb-4 px-4">
      <div className="flex justify-between w-full">
        <Profile />
        <div className="flex items-center gap-x-3">
          <button className="w-5 dark:text-dark-100 dark:hover:text-dark-50 duration-200 text-primaryBlack">
            <Bookmark />
          </button>
          <button className="w-5 dark:text-dark-100 dark:hover:text-dark-50 duration-200 text-primaryBlack">
            <Dots />
          </button>
        </div>
      </div>

      {/* Description --Start-- */}
      <div>
        <p className="text-base dark:text-light-200 text-primaryBlack tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          porro a consequatur sapiente suscipit quaerat explicabo libero
          voluptate quibusdam, tempore, debitis dolor eveniet, vero rerum.
        </p>
      </div>
      {/* Description --End-- */}
    </header>
  );
}

export default Header;
