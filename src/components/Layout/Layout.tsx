import Header from "@components/Header";
import NavBar from "@components/NavBar";
import { useHeaderHeight } from "@state/index";
import React, { ReactNode } from "react";

function Layout({
  children,
  isRightSideBar = false,
}: {
  children: ReactNode;
  isRightSideBar?: boolean;
}) {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <>
      <NavBar />
      <div className="ml-[350px]">
        <Header />
        <main className="w-full min-h-screen px-8 p-5">
          {children}
          {isRightSideBar && (
            <div
              style={{ marginTop: headerHeight + 20 }}
              className="fixed right-8 top-0 w-[350px] h-full bg-white dark:bg-dark-500"
            ></div>
          )}
        </main>
      </div>
    </>
  );
}

export default Layout;
