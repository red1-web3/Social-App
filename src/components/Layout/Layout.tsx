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
      <div className="container">
        <div className="grid grid-cols-[2fr,6fr,2fr+40px]">
          <aside>
            <Sidebar />
          </aside>
          <main className="w-full min-h-screen px-10 mt-8">{children}</main>
          {isRightSideBar ? (
            <aside>
              <div
                className="sticky right-0 pt-8"
                style={{
                  top: headerHeight,
                  height: `calc(100vh - ${headerHeight}px)`,
                }}
              >
                <div className="dark:bg-dark-500 w-full h-full">
                  {/* Content Here */}
                </div>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Layout;
