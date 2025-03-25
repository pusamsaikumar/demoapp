import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import User from "../userReduxcomp/User";
import UsersDetails from "../users/UsersDetails";
import NavbarH from "../portpolio/Navbar/Navbar";
import Hero from "../portpolio/Hero/Hero";
import Skills from "../portpolio/Skills/Skills";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <NavbarH />
      <div className="container-app">
        {/* <Routes>
     
          <Route path="/hero" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> */}
        <Hero />
        <Skills />
      </div>
    </>
  );
};

export default Layout;
