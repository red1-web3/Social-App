import Time from "@components/Icons/Time";
import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className="flex items-center gap-x-3">
      <Image
        src="/user-profile.jpg"
        alt="Profile image"
        height={42}
        width={42}
        className="rounded-full"
      />
      <div>
        <h3 className="dark:text-light-200 text-primaryBlack">Amile jackson</h3>
        <div className="flex items-center gap-x-1">
          <p className="flex items-center text-sm dark:text-light-700 gap-x-1">
            <span className="translate-y-[1px]">
              <Time />
            </span>
            <span>12 minutes ago on</span>
          </p>
          <strong className="dark:text-light-200 text-primaryBlack text-sm">
            3d Stock Contributor
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Profile;
