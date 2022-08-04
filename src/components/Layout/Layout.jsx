import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./layout.sass";

const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <Navbar />
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
