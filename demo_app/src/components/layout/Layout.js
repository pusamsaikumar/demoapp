import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import User from "../userReduxcomp/User";
import UsersDetails from "../users/UsersDetails";
import NavbarH from "../portpolio/Navbar/Navbar";
import Hero from "../portpolio/Hero/Hero";
import Skills from "../portpolio/Skills/Skills";
import WorkExperience from "../portpolio/workexperience/WorkExperience";
import ContactMe from "../portpolio/ContactMe/ContactMe";
import Footer from "../portpolio/Footer/Footer";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <NavbarH />
      <div className="container-app">
       <Routes>
     
          <Route path="/hero" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
        </Routes> 
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      
      </div>
      <Footer /> */}
      <BackgroundVideo />
      
    </>
  );
};

export default Layout;
