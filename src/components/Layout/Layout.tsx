import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import { useHeaderHeight } from "@state/index";
import React, { ReactNode } from "react";

function Layout({
  children,
  isRightSideBar = false,
}: {
  children: ReactNode;
  isRightSideBar?: boolean | ReactNode;
}) {
  const [headerHeight, setHeaderHeight] = useHeaderHeight();

  return (
    <>
      <Header />
      <div className="container">
        <div className="grid grid-cols-[2fr,6fr,1.7fr+40px]">
          <aside className="bg-dark-600">
            <Sidebar />
          </aside>
          <main className="w-full min-h-screen px-10 my-8">{children}</main>

          <aside className="h-screen">
            <div
              className="sticky right-0 pt-8 bg-red-500"
              style={{
                top: headerHeight,
                height: `calc(100vh - ${headerHeight}px)`,
              }}
            >
              <div className="w-full h-full">
                {/* Content Here */}
                {isRightSideBar}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Layout;
