import Home from "@components/Icons/Home";
import { useHeaderHeight } from "@state/index";
import React, { useEffect, useRef } from "react";
import PorfilePart from "./components/PorfilePart";
import Topbar from "./components/Topbar";

function Header() {
  const header = useRef<HTMLElement>(null!);
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  useEffect(() => {
    setHeaderHeight(header.current.clientHeight);
    return () => {};
  }, []);

  return (
    <header
      ref={header}
      className="dark:bg-dark-500 sticky inset-0 border-b-2 border-borderColor"
    >
      <div className="w-full flex justify-between px-6 py-4">
        <div className="grow flex items-center gap-x-8">
          <div className="flex items-center gap-x-2 cursor-default">
            <span className="dark:text-white w-6">
              <Home />
            </span>
            <span className="text-base dark:text-white">Home</span>
          </div>
          <Topbar />
        </div>
        <div className="shrink-0">
          <PorfilePart />
        </div>
      </div>
    </header>
  );
}

export default Header;
