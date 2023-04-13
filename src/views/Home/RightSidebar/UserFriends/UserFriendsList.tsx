import Image from "next/image";
import React from "react";

function UserFriendsList() {
  return (
    <li className="flex justify-between items-center py-1">
      <div className="flex items-center gap-x-3">
        {/* Profile image --Start-- */}

        <div>
          <Image
            src={"/user-profile-2.jpg"}
            height={35}
            width={35}
            alt="Image"
            className="rounded-full"
          />
        </div>
        {/* Profile image --End-- */}
        {/* Name and Activity --Start-- */}
        <div>
          <h5 className="dark:text-light-200 text-primaryBlack font-medium">
            Emma valerio
          </h5>
          <span className="text-[13px]/[13px] dark:text-primaryWhite text-primaryBlack -translate-y-1 inline-block">
            last active recently
          </span>
        </div>
      </div>
      {/* Name and Activity --End-- */}

      <span className="text-xs/3 text-light-400 bg-dark-400 p-1.5 rounded-full">
        12
      </span>
    </li>
  );
}

export default UserFriendsList;
