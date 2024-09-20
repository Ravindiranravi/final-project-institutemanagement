import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; 
import carouselImage1 from '../assets/students.jpg';
import carouselImage2 from '../assets/technical.jpg';
import carouselImage3 from '../assets/Buolding.jpg';
import Frontend from '../assets/Frontendrt.webp';
import Backend from '../assets/Backend.png';
import Fullstack from '../assets/FullStack.webp';
import AboutUsModal from './AboutUsModal ';
import ScrollToTop from './ScrollToTop';


function HomePage() {
  return (
    <div>
      {/* Carousel Section */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img" src={carouselImage1} alt="Slide 1" />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Sparkle Your Style</h1>
                <p className="opacity-75">Pride Material Collections.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img" src={carouselImage2} alt="Slide 2" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Your Favourite Techs.</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img" src={carouselImage3} alt="Slide 3" />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Technoculture.</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* About Us Section */}
      <section className="about-us text-center my-5">
        <div className="container">
          <h2 style={{ fontFamily: "'Lobster', cursive" }}>About Us</h2>
          <p>
            At Quantam Training Institute, we provide high-quality training in both frontend and backend development. Our mission is to equip students with the skills needed to thrive in the tech industry.
          </p>
          <AboutUsModal />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses text-center my-5">
        <div className="container">
          <h2 style={{ fontFamily: "'Lobster', cursive" }}>Popular Courses</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img className="bd-placeholder-img" src={Frontend} alt="FrontEnd" />
                <div className="card-body">
                  <h5 className="card-title">Frontend Development</h5>
                  <p className="card-text">Frontend development involves creating the visual and interactive aspects of websites and apps, focusing on user experience and design.</p>
                  <Link to="/courses" className="btn btn-primary">View Course</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img className="bd-placeholder-img" src={Backend} alt="Backend" />
                <div className="card-body">
                  <h5 className="card-title">Backend Development</h5>
                  <p className="card-text">
                    Backend development involves server-side logic, database management, and functionality, ensuring data processing and integration for smooth user experiences.
                  </p>
                  <Link to="/courses" className="btn btn-primary">View Course</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img className="bd-placeholder-img" src={Fullstack} alt="FullStack" />
                <div className="card-body">
                  <h5 className="card-title">Full Stack Development</h5>
                  <p className="card-text">Become proficient in both frontend and development end backend technologies to complete web development projects full stack developed .</p>
                  <Link to="/courses" className="btn btn-primary">View Course</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials text-center my-5">
        <div className="container">
          <h2 style={{ fontFamily: "'Lobster', cursive" }}>What Our Students Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p className="mb-0">"The courses at Quantam Training Institute are top-notch. I've gained valuable skills that have helped me in my career."</p>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p className="mb-0">"Excellent instructors and a well-structured curriculum. Highly recommend for anyone looking to advance in tech."</p>
              </blockquote>
            </div>
            <div className="col-md-4 mb-4">
              <blockquote className="blockquote">
                <p className="mb-0">"I appreciated the practical approach to learning. The hands-on projects were really helpful and progressive."</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta text-center text-white bg-primary py-5">
        <div className="container">
          <h2 className="display-4">Ready to Start Learning?</h2>
          <p className="lead">Join us today and take the first step towards your new career!</p>
          <Link to="/SignUp" className="btn btn-light btn-lg">Sign Up</Link>
        </div>
      </section>

      <hr />
    </div>
  );
}

export default HomePage;
