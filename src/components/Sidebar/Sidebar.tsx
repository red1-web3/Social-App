import { useHeaderHeight } from "@state/index";
import React from "react";
import Navigations from "./Navigations/Navigations";
import Community from "./Community/Community";

function Sidebar() {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <aside
      style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
      className="_sidebar fixed left-0 max-w-[320px] overflow-auto w-full dark:bg-dark-500 border-r-2 border-borderColor"
    >
      <div className="flex flex-col gap-6 p-5">
        <Navigations />
        <hr className="dark:border-gray-400/40" />
        <Community />
      </div>
    </aside>
  );
}

export default Sidebar;
