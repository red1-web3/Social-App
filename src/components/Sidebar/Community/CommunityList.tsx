import Image from "next/image";
import Link from "next/link";
import React from "react";

function CommunityList() {
  return (
    <li>
      <Link href={"#"} className="flex items-center gap-x-2.5">
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
          <h2 className="dark:text-light-400 text-primaryBlack line-clamp-1">
            Bangladeshi UI Designer
          </h2>
          <span className="text-xs dark:text-primaryWhite text-primaryBlack -translate-y-1 inline-block">
            462 members
          </span>
        </div>
      </Link>
    </li>
  );
}

export default CommunityList;
