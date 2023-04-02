import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
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
      <Header />
      <Sidebar />
      <div className="ml-[320px] mr-[352px]">
        <main className="w-full min-h-screen px-10 py-5">
          {children}
          {isRightSideBar && (
            <div
              style={{ marginTop: headerHeight + 20 }}
              className="fixed right-8 top-0 w-[320px] h-full bg-white dark:bg-dark-500"
            ></div>
          )}
        </main>
      </div>
    </>
  );
}

export default Layout;
