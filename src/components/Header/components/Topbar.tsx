import classNames from "classnames";
import Link from "next/link";
import React, {
  ComponentProps,
  useRef,
  useState,
  forwardRef,
  Ref,
  useEffect,
} from "react";
import { topBarData } from "src/constant";
import { Topbar } from "src/models/Header";

interface BackgroundProps {
  height: number;
  width: number;
  top: number;
  left: number;
}

function Topbar() {
  const [active, setActive] = useState<number>(0);
  const [backgroundProps, setBackgroundProps] = useState<BackgroundProps>({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
  });
  console.log({ backgroundProps });
  const _anchor = useRef<(HTMLLIElement | null)[]>([]);
  function clickAnchor(i: number) {
    setActive(i);
    setBackgroundProps({
      height: _anchor.current?.[i]?.getBoundingClientRect().height || 0,
      width: _anchor.current?.[i]?.getBoundingClientRect().width || 0,
      top: _anchor.current?.[i]?.getBoundingClientRect().top || 0,
      left: _anchor.current?.[i]?.getBoundingClientRect().left || 0,
    });
  }

  useEffect(() => {
    setBackgroundProps({
      height: _anchor.current?.[active]?.getBoundingClientRect().height || 0,
      width: _anchor.current?.[active]?.getBoundingClientRect().width || 0,
      top: _anchor.current?.[active]?.getBoundingClientRect().top || 0,
      left: _anchor.current?.[active]?.getBoundingClientRect().left || 0,
    });
  }, []);

  return (
    <ul className="relative flex items-center gap-x-3 dark:text-white text-sm dark:bg-dark-400 p-1 rounded-md">
      {topBarData.map((data, i) => (
        <Anchor
          data={data}
          key={i}
          onClick={() => clickAnchor(i)}
          ref={(el) => (_anchor.current[i] = el)}
        />
      ))}
      <li
        style={{
          top: 0,
          left: backgroundProps.left - 477,
          height: backgroundProps.height,
          width: backgroundProps.width,
        }}
        className="bg-dark-300 absolute mt-1 duration-300 rounded-md z-[1]"
      ></li>
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
          "px-5 py-1.5 cursor-pointer rounded-md select-none relative z-[2]",
          className
        )}
      >
        <Link href={"#"}>{label}</Link>
      </li>
    );
  }
);
