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
  const _anchor = useRef<HTMLLIElement[]>([]);
  const _activeAnchorBg = useRef<HTMLLIElement>(null!);
  const _anchorParent = useRef<HTMLUListElement>(null!);

  function clickAnchor(i: number) {
    const { height, left, width, top } =
      _anchor.current[i].getBoundingClientRect();

    _activeAnchorBg.current.style.transition = "300ms";
    _activeAnchorBg.current.style.transitionProperty = "all";

    setActive(i);
    setBackgroundProps({
      height: height,
      width: width,
      top: top,
      left: left,
    });
  }

  useEffect(() => {
    const { height, left, width, top } =
      _anchor.current[active].getBoundingClientRect();
    setBackgroundProps({
      height: height,
      width: width,
      top: top,
      left: left,
    });
  }, []);

  return (
    <ul
      ref={_anchorParent}
      className="relative flex items-center gap-x-3 dark:text-white text-sm dark:bg-dark-400 p-1 rounded-md"
    >
      {topBarData.map((data, i) => (
        <Anchor
          data={data}
          key={i}
          onClick={() => clickAnchor(i)}
          ref={(el) => {
            if (el !== null) {
              _anchor.current[i] = el;
            }
          }}
        />
      ))}
      <li
        ref={_activeAnchorBg}
        style={{
          top: 0,
          left:
            backgroundProps.left -
            _anchorParent.current?.getBoundingClientRect().left,
          height: backgroundProps.height,
          width: backgroundProps.width,
        }}
        className="bg-dark-300 absolute mt-1 rounded-md z-[1]"
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
