import Header from "@components/Header";
import NavBar from "@components/NavBar";
import React, { ReactNode } from "react";

function Layout({
  children,
  isRightSideBar = false,
}: {
  children: ReactNode;
  isRightSideBar?: boolean;
}) {
  return (
    <>
      <NavBar />
      <div className="ml-[350px]">
        <Header />
        <main className="w-full min-h-screen bg-slate-900 px-8 p-5">
          {children}
          {isRightSideBar && (
            <div className="fixed right-8 top-5 w-[300px] h-full bg-red-600"></div>
          )}
        </main>
      </div>
    </>
  );
}

export default Layout;
