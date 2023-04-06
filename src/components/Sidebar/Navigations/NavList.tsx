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
    }: { data: NavItem } & ComponentProps<"button">,
    ref: Ref<HTMLButtonElement>
  ) => {
    const router = useRouter();
    const active = router.pathname === path;

    return (
      <button
        id={path}
        ref={ref}
        {...rest}
        className={classNames(
          "px-4 py-3 rounded-md duration-200 _tranistionFunc relative z-[2] block w-full",
          active ? "text-primary" : "dark:text-light-700",
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
      </button>
    );
  }
);

export default NavList;
