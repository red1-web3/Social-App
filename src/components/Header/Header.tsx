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
    <header ref={header} className="h-[70px] bg-slate-500 sticky inset-0">
      Header
    </header>
  );
}

export default Header;
