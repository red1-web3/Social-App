import Home from "@components/Icons/Home";
import { useHeaderHeight } from "@state/index";
import React, { useEffect, useRef } from "react";

function Header() {
  const header = useRef<HTMLElement>(null!);
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  useEffect(() => {
    setHeaderHeight(header.current.clientHeight);
    return () => {};
  }, []);

  return (
    <header ref={header} className="dark:bg-bodyBlack sticky inset-0">
      <div className="w-full flex justify-between px-5">
        <div className="grow">
          <div className="flex items-center gap-x-2">
            <span className="dark:text-white w-6">
              <Home />
            </span>
            <span className="text-base dark:text-white">Home</span>
          </div>
        </div>
        <div className="shrink-0"></div>
      </div>
    </header>
  );
}

export default Header;
