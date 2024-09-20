import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="py-5 footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Quantam Training Institute</h3>
            <p className="address">
              123 Learning Street,<br />
              Knowledge City, Eduland 54321,<br />
              Phone: +1 (123) 456-7890<br />
              Email: contact@quantamtraining.com
            </p>
          </div>

          <div className="col-md-4 mb-3 text-md-end"> {/* Aligned to the right */}
            <h4>Connect with Us</h4>
            <br />
            <div className="d-flex justify-content-md-end">
              <a href="https://github.com/hamsavanan" target="_blank" rel="noopener noreferrer" className="me-3">
                <FontAwesomeIcon icon={faGithub} className="links github" />
              </a>
              <a href="https://www.linkedin.com/in/sanjai-j-9b7956250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="me-3">
                <FontAwesomeIcon icon={faLinkedin} className="links linkedin" />
              </a>
              <a href="https://www.instagram.com/quantamtech" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="links instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="mb-0">&copy; 2024 Quantam Training Institute. All rights reserved.</p>
          <p className="mb-0">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
