import React from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Master = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Master;
