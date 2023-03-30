import Home from "@components/Icons/Home";
import React from "react";

function NavList() {
  return (
    <div className="flex items-center gap-x-3">
      <span className="w-5">
        <Home />
      </span>
    </div>
  );
}

export default NavList;
