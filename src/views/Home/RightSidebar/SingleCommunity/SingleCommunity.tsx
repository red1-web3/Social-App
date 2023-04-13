import Image from "next/image";
import React from "react";

function SingleCommunity() {
  return (
    <div className="_border rounded-md dark:bg-dark-600">
      {/* Image section --Start-- */}
      <div className="w-full relative h-[220px]">
        <Image
          src={"/figma.jpg"}
          fill
          sizes="cover"
          className="object-cover"
          alt="Figma image"
        />
      </div>
      {/* Image section --End-- */}

      {/* Footer part --Start-- */}
      <div className="px-3 py-3 space-y-1.5">
        <div>
          <h5 className="dark:text-light-200 text-primaryBlack text-sm font-medium">
            Figma Designer
          </h5>
          <span className="text-xs dark:text-primaryWhite text-primaryBlack -translate-y-1 inline-block">
            1145 members - 12080 post/day
          </span>
        </div>
        <button className="w-full block text-center text-primary font-medium _borderLight rounded-md py-2">
          Join community
        </button>
      </div>
      {/* Footer part --End-- */}
    </div>
  );
}

export default SingleCommunity;
