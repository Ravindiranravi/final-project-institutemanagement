import React from "react";
import "./about.css";
import logo from "../../assets/app.png"; // replace with your actual logo

export const About = () => {

  return (
    <>
      <div className="home-contents about" id="About">
        <div className="about-container">
          <h2 className="institute-name" data-aos="fade-right" data-aos-duration="3000">Quantam Training Institute</h2>
          <p className="designation" data-aos="fade-right" data-aos-duration="3000">
            <span>|</span> Empowering Future <span className="deve-color">Professionals</span>
          </p>
          <p className="mission-statement" data-aos="fade-right" data-aos-duration="3000">
            “At Quantam Training, we foster continuous learning and adaptability,
            preparing students to excel in their careers and embrace new challenges."
          </p>
          <div className="media-links" data-aos="fade-up" data-aos-duration="3000">
            <a href="#Contact" className="contacts">Contact Us</a>
            <a href="https://www.changepond.com/" target="_blank" rel="noreferrer" className="brochure">Placement</a>
          </div>
        </div>
        <div className="imgdiv">
          <img className="institute-logo" src={logo} alt="Quantam Training Logo" />
        </div>
      </div>
    </>
  );
};
