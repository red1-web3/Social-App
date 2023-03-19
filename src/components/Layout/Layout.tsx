import Footer from "@components/Footer";
import Header from "@components/Header";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
