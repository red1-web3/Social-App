import classNames from "classnames";
import Link from "next/link";
import React, { ComponentProps, useState } from "react";
import { topBarData } from "src/constant";
import { Topbar } from "src/models/Header";

function Topbar() {
  const [active, setActive] = useState<number>(0);

  return (
    <ul className="flex items-center gap-x-3 dark:text-white text-sm dark:bg-dark-400 p-1 rounded-md">
      {topBarData.map((data, i) => (
        <Anchor
          data={data}
          key={i}
          onClick={() => setActive(i)}
          className={classNames(active === i && "bg-dark-300")}
        />
      ))}
    </ul>
  );
}

export default Topbar;

function Anchor({
  data: { label },
  className,
  ...rest
}: { data: Topbar } & ComponentProps<"li">) {
  return (
    <li
      {...rest}
      className={classNames(
        "px-5 py-1.5 cursor-pointer rounded-md select-none",
        className
      )}
    >
      <Link href={"#"}>{label}</Link>
    </li>
  );
}
