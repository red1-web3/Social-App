import Input from "@components/Inputs/Input";
import Logo from "@components/Logo";
import { useHeaderHeight } from "@state/index";
import React from "react";
import NavList from "./NavList";

function NavBar() {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <aside
      style={{ top: headerHeight }}
      className="fixed left-0 max-w-[350px] w-full h-full dark:bg-dark-500 border-r-2 border-borderColor"
    >
      <nav className="h-full w-full p-5">
        <div className="mb-4">
          <Input />
        </div>
        <NavList />
      </nav>
    </aside>
  );
}

export default NavBar;
