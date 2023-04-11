import Home from "@components/Icons/Home";
import Logo from "@components/Logo";
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
      className="dark:bg-dark-500 fixed top-0 left-0 w-full border-b-2 bg-dark-700 border-borderColor z-[999]"
    >
      <div className="w-full flex justify-between px-6 py-4">
        <Logo />
        <div className="grow flex items-center gap-x-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-x-4 cursor-default">
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
