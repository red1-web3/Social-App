import Home from "@components/Icons/Home";
import { useHeaderHeight } from "@state/index";
import React, { useEffect, useRef } from "react";
import Topbar from "./components/Topbar";

function Header() {
  const header = useRef<HTMLElement>(null!);
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  useEffect(() => {
    setHeaderHeight(header.current.clientHeight);
    return () => {};
  }, []);

  return (
    <header ref={header} className="dark:bg-dark-500 sticky inset-0">
      <div className="w-full flex justify-between px-5 py-4">
        <div className="grow flex items-center gap-x-8">
          <div className="flex items-center gap-x-2 cursor-default">
            <span className="dark:text-white w-6">
              <Home />
            </span>
            <span className="text-base dark:text-white">Home</span>
          </div>
          <Topbar />
        </div>
        <div className="shrink-0"></div>
      </div>
    </header>
  );
}

export default Header;
