import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header /> {/* Navbar will only show on wrapped pages */}
      <Outlet /> {/* This will render child components */}
    </>
  );
};

export default Layout;
