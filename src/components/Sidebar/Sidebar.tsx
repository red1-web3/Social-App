import { useHeaderHeight } from "@state/index";
import React from "react";
import Navigations from "./Navigations/Navigations";

function Sidebar() {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <aside
      style={{ top: headerHeight }}
      className="fixed left-0 max-w-[320px] w-full h-full dark:bg-dark-500 border-r-2 border-borderColor"
    >
      <Navigations />
    </aside>
  );
}

export default Sidebar;
