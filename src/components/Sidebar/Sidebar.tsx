import { useHeaderHeight } from "@state/index";
import React from "react";
import Navigations from "./Navigations/Navigations";
import Community from "./Community/Community";
import UpComingEvents from "./UpComingEvents/UpComingEvents";

function Sidebar() {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <div
      style={{ top: headerHeight, height: `calc(100vh - ${headerHeight}px)` }}
      className="_sidebar sticky left-0 overflow-auto dark:bg-dark-500 border-r-2 border-borderColor"
    >
      <div className="flex flex-col gap-6 p-5">
        <Navigations />
        <hr className="dark:border-gray-400/30" />
        <Community />
        <hr className="dark:border-gray-400/30" />
        <UpComingEvents />
      </div>
    </div>
  );
}

export default Sidebar;
