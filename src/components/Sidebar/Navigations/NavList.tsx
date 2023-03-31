import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ComponentProps, forwardRef, Ref, useRef } from "react";
import { NavItem } from "src/models/Navbar";

const NavList = forwardRef(
  (
    {
      data: { label, logo, path },
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
            "flex items-center gap-x-5 px-4 py-3 rounded-md duration-200 _tranistionFunc",
            active ? "text-primary" : "dark:text-white "
          )}
        >
          <span className="w-5">{logo}</span>
          <span>{label}</span>
        </div>
      </Link>
    );
  }
);

export default NavList;