import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AB1 from '../assets/ab1.webp'
import AB2 from '../assets/Ab2.jpeg'
import './homepage.css'; 

const AboutUsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Learn More About Us
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>About Quantum Tech</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add relevant images here */}
          <img className="bd-placeholder-img" src={AB1} alt="About" />
          
          <h5 style={{ fontFamily: "'Lobster', cursive" }}>Our Mission</h5>
          <p>
            At Quantum Tech, our mission is to foster innovation and empower aspiring tech professionals with cutting-edge training. 
            Under the leadership of our CEO, Dharaneh, we focus on providing hands-on experience to ensure our students 
            excel in both frontend and backend technologies. Our goal is to build a community where individuals of all skill levels 
            can come together, collaborate, and create transformative tech solutions.
          </p>

          <img className="bd-placeholder-img" src={AB2} alt="About" />
          
          <h5 style={{ fontFamily: "'Lobster', cursive" }}>Courses We Offer</h5>
          <p>
            We offer an extensive range of courses, including Web Development, Mobile Development, Data Science, and Artificial Intelligence. 
            Whether you're a beginner looking to start your tech journey or an experienced professional aiming to expand your expertise, 
            Quantum Tech has a course for you. Our curriculum is continuously updated to reflect the latest industry trends, 
            making sure our students are always one step ahead in the fast-paced tech world.
          </p>

          <h5 style={{ fontFamily: "'Lobster', cursive" }}>Our Vision</h5>
          <p>
            We envision a future where technology is accessible to everyone, and our graduates are not just prepared for the industry but are 
            leaders in shaping it. With a focus on inclusivity, Quantum Tech is dedicated to fostering an environment where 
            creativity and innovation flourish. Ravi and Haran, our experienced managers, work tirelessly to ensure that every student 
            receives the support and guidance they need to succeed.
          </p>

          <h5 style={{ fontFamily: "'Lobster', cursive" }}>Contact Information</h5>
          <p>
            Interested in learning more or ready to join Quantum Tech? Feel free to reach out to us at: 
            <strong> info@quantumtech.com</strong> or visit us at our campus located at 1234 Tech Lane, City, Country. 
            We are always available to assist you with any inquiries and look forward to helping you embark on your tech career.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AboutUsModal;
