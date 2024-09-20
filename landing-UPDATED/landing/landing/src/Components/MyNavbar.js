import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./mynavbar.css";
import logo from "../assets/logo.avif"; // Adjust the path as needed


function MyNavbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header>
      <div className="header-top px-3 py-2 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none header-title">
              <img src={logo} alt="Quantam Tech Logo" className="navbar-logo" />
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small header-nav">
              <li>
                <Link to="/" className="nav-link text-white">
                Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="nav-link text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-white">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link to="/signin" className="nav-link text-white">
                  Sign In
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto text-center">
            <h1 className="quantum-title">Quantum Tech</h1>
          </div>

          <div className="text-end">
            <Link to="/signin" className="btn btn-primary me-2">Login</Link>
            <Link to="/SignUp" className="btn btn-primary me-2">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MyNavbar;
