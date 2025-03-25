import React from "react";
import "./hero.css";
import logo1 from "../../assests/images/logo192.png";
import user from "../../assests/images/user.png";
import javascript from "../../assests/images/javascript.png";
import html from "../../assests/images/html-5.png";
import css from "../../assests/images/css.jpg";
import user2 from "../../assests/images/user2.jpg";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          I'm a passionate front end developer with using React js and Tailwind
          CSS,Boostrap and React Boostrap , Redux and Javascript. | Transforming
          Ideas into Seamless and Visually Stunning web solutions.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img className="img" src={logo1} alt="" />
          </div>
          <img className="" src={user2} alt="user" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={javascript} alt="" />
          </div>

          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
