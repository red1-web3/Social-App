import Input from "@components/Inputs/Input";
import React, { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "react-use";
import { navigationItems } from "src/constant/Navbar";
import NavList from "./NavList";
import { useRouter } from "next/router";

interface BackgroundRect {
  height: number;
  top: number;
  left: number;
}

function Navigations() {
  const [backgroundRect, setBackgroundRect] = useState<BackgroundRect>({
    height: 0,
    left: 0,
    top: 0,
  });
  // const [pathname, setPathname] = useState<string>("");

  const _list = useRef<HTMLButtonElement[]>([]);
  const _listParent = useRef<HTMLDivElement>(null!);
  const _activeListBg = useRef<HTMLDivElement>(null!);
  const [value, setLocal, remove] = useLocalStorage("my-key", "foo");

  const router = useRouter();

  useEffect(() => {
    const sidebarLink = document.getElementById(router.pathname);
    if (!sidebarLink) return;

    const linkRect = sidebarLink.getBoundingClientRect();
    setBackgroundRect({
      height: linkRect.height,
      top: linkRect.top,
      left: linkRect.left,
    });
  }, [router.pathname]);

  function clickNavList(i: number, path: string) {
    router.push(path);
    const { height, left, top } = _list.current[i].getBoundingClientRect();

    setLocal(i.toString());
    _activeListBg.current.style.transition = "200ms";
    _activeListBg.current.style.transitionProperty = "all";

    setBackgroundRect({
      height: height,
      top: top,
      left: left,
    });
  }
  return (
    <nav className="h-full w-full">
      <div className="mb-8">
        <Input />
      </div>
      <div className="relative" ref={_listParent}>
        {navigationItems.map((data, i) => (
          <NavList
            key={i}
            data={data}
            onClick={() => clickNavList(i, data.path)}
            ref={(el) => {
              if (el !== null) {
                _list.current[i] = el;
              }
            }}
          />
        ))}

        <div
          ref={_activeListBg}
          style={{
            top:
              backgroundRect.top -
                _listParent.current?.getBoundingClientRect().top || 0,
            height: backgroundRect.height,
          }}
          className="absolute left-0 w-full dark:bg-dark-400 _tranistionFunc rounded-md z-[1]"
        ></div>
      </div>
    </nav>
  );
}

export default Navigations;
