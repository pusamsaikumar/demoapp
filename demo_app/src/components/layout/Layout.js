import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import User from "../userReduxcomp/User";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </>
  );
};

export default Layout;
