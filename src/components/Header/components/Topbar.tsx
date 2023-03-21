import classNames from "classnames";
import Link from "next/link";
import React, {
  ComponentProps,
  useRef,
  useState,
  forwardRef,
  Ref,
} from "react";
import { topBarData } from "src/constant";
import { Topbar } from "src/models/Header";

interface ElementProps {
  height: number;
  width: number;
  top: number;
  left: number;
}

function Topbar() {
  const [active, setActive] = useState<number>(0);
  const _anchor = useRef<(HTMLLIElement | null)[]>([]);

  function clickAnchor(i: number) {
    setActive(i);

    console.log(_anchor.current?.[i]?.getBoundingClientRect());
  }

  return (
    <ul className="relative flex items-center gap-x-3 dark:text-white text-sm dark:bg-dark-400 p-1 rounded-md">
      {topBarData.map((data, i) => (
        <Anchor
          data={data}
          key={i}
          onClick={() => clickAnchor(i)}
          className={classNames(active === i && "bg-dark-300")}
          ref={(el) => (_anchor.current[i] = el)}
        />
      ))}
    </ul>
  );
}

export default Topbar;

const Anchor = forwardRef(
  (
    {
      data: { label },
      className,

      ...rest
    }: { data: Topbar } & ComponentProps<"li">,
    ref: Ref<HTMLLIElement>
  ) => {
    return (
      <li
        ref={ref}
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
);
