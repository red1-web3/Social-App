import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ComponentProps, forwardRef, Ref, useRef } from "react";
import { NavItem } from "src/models/Navbar";

const NavList = forwardRef(
  (
    {
      data: { label, logo, path, newListing },
      ...rest
    }: { data: NavItem } & ComponentProps<"div">,
    ref: Ref<HTMLDivElement>
  ) => {
    const router = useRouter();

    const active = router.pathname === path;
    return (
      <Link href={path} className="relative z-[2]">
        <div
          ref={ref}
          {...rest}
          className={classNames(
            "px-4 py-3 rounded-md duration-200 _tranistionFunc",
            active ? "text-primary" : "dark:text-white",
            newListing && "flex justify-between items-center"
          )}
        >
          <div className="flex items-center gap-x-5 w-full">
            <span className="w-5">{logo}</span>
            <span>{label}</span>
          </div>

          {newListing && (
            <div className="text-xs shrink-0 text-white rounded-3xl dark:bg-dark-400 px-3 py-1">
              {newListing} new listing
            </div>
          )}
        </div>
      </Link>
    );
  }
);

export default NavList;
