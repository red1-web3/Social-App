import Home from "@components/Icons/Home";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavItem } from "src/models/Navbar";

function NavList({ data: { label, logo, path } }: { data: NavItem }) {
  const router = useRouter();

  const active = router.pathname === path;
  return (
    <Link href={"#"}>
      <div
        className={classNames(
          "flex items-center gap-x-5 px-4 py-3 rounded-md",
          active ? "text-primary dark:bg-dark-400" : "dark:text-white "
        )}
      >
        <span className="w-5">{logo}</span>
        <span>{label}</span>
      </div>
    </Link>
  );
}

export default NavList;
