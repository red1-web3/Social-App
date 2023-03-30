import Logo from "@components/Logo";
import { useHeaderHeight } from "@state/index";
import React from "react";

function NavBar() {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <aside
      style={{ top: headerHeight }}
      className="fixed left-0 max-w-[350px] w-full h-full dark:bg-dark-500 border-r-2 border-borderColor"
    >
      <nav className="h-full w-full p-5"></nav>
    </aside>
  );
}

export default NavBar;
