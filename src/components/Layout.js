import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SKLU Cabs</title>
      </Head>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="mb-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;