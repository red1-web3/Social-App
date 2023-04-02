import Image from "next/image";
import Link from "next/link";
import React from "react";

function CommunityList() {
  return (
    <li>
      <Link href={"#"} className="flex items-center gap-x-4">
        <div>
          <Image
            src={"/community.jpg"}
            height={35}
            width={35}
            alt="Image"
            className="object-cover rounded-full"
          />
        </div>

        <div className="translate-y-1">
          {/* Text */}
          <h2 className="text-sm font-medium dark:text-white text-primaryBlack leading-[14px] line-clamp-1">
            Bangladeshi UI Designer
          </h2>

          <span className="text-xs dark:text-white/60 text-primaryBlack leading-3">
            462 members
          </span>
        </div>
      </Link>
    </li>
  );
}

export default CommunityList;
