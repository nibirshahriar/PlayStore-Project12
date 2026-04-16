import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* dynamic */}
      <Outlet />
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default RootLayout;
