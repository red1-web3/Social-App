import Image from "next/image";
import React from "react";

function CommunityList() {
  return (
    <li className="flex items-center gap-x-4">
      <div className="rounded-full overflow-hidden">
        <Image src={"/community.jpg"} height={35} width={35} alt="Image" />
      </div>

      <div>
        {/* Text */}
        <h2 className="text-sm font-medium dark:text-white text-primaryBlack leading-[14px]">
          Bangladeshi UI Designer
        </h2>

        <span className="text-xs dark:text-white/60 text-primaryBlack leading-3">
          462 members
        </span>
      </div>
    </li>
  );
}

export default CommunityList;
