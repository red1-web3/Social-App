import Home from "@components/Icons/Home";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

function NavList({ active }: { active?: boolean }) {
  return (
    <Link href={"#"}>
      <div
        className={classNames(
          "flex items-center gap-x-3 px-4 py-3 rounded-md",
          active ? "text-primary dark:bg-dark-400" : "dark:text-white "
        )}
      >
        <span className="w-5">
          <Home />
        </span>
        <span>Home</span>
      </div>
    </Link>
  );
}

export default NavList;
