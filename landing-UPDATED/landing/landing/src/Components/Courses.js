import React, { useState } from 'react'; // Import useState
import './Courses.css';
import Images from './CourseImages'; // Replace with your actual image import file

function Courses() {
  const [email, setEmail] = useState(""); // State to store email input
  const [showPopup, setShowPopup] = useState(false); // State for showing/hiding the popup
  const [popupMessage, setPopupMessage] = useState(""); // State to control popup message
  const [subscribedEmails, setSubscribedEmails] = useState([]); // State to track subscribed emails

  const courses = [
    {
      title: 'Web Development',
      description: 'Learn to build responsive and dynamic websites.',
      image: Images.webDevelopment,
      alt: 'web-development-course',
    },
    {
      title: 'Data Science',
      description: 'Master data analysis and machine learning techniques.',
      image: Images.dataScience,
      alt: 'data-science-course',
    },
    {
      title: 'Machine Learning',
      description: 'Dive into artificial intelligence and predictive models.',
      image: Images.machineLearning,
      alt: 'machine-learning-course',
    },
    {
      title: 'Cloud Computing',
      description: 'Get hands-on experience with cloud platforms and services.',
      image: Images.cloudComputing,
      alt: 'cloud-computing-course',
    },
    {
      title: 'C# Programming',
      description: 'Develop robust applications with C#.',
      image: Images.Csharp,
      alt: 'Csharp-course',
    },
    {
      title: 'Java Programming',
      description: 'Learn Java from basics to advanced concepts.',
      image: Images.java,
      alt: 'java-course',
    },
    {
      title: 'PHP Development',
      description: 'Create dynamic websites and applications using PHP.',
      image: Images.php,
      alt: 'php-course',
    },
    {
      title: 'C++ Programming',
      description: 'Build high-performance applications with C++.',
      image: Images.cplusplus1,
      alt: 'cplus-course',
    },
  ];

  const faqs = [
    {
      question: 'What are the prerequisites for the courses?',
      answer: 'Basic knowledge of programming is recommended for most courses.',
    },
    {
      question: 'How are the courses structured?',
      answer: 'Our courses include a combination of video lessons, hands-on exercises, and quizzes.',
    },
    {
      question: 'Do you provide any certifications?',
      answer: 'Yes, you will receive a certificate upon completion of the course.',
    },
    {
      question: 'Can I get personalized support?',
      answer: 'Yes, our instructors are available to help you with any doubts or questions.',
    },
  ];

  const handleSubscribe = () => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setPopupMessage("Invalid email format");
    } else if (subscribedEmails.includes(email)) {
      setPopupMessage("This email is already subscribed!");
    } else {
      setSubscribedEmails([...subscribedEmails, email]); // Add email to the subscribed list
      setPopupMessage("Subscribed Successfully!");
    }

    setShowPopup(true); // Show the popup

    setTimeout(() => {
      setShowPopup(false); // Hide the popup after 2 seconds
    }, 2000);
  };

  return (
    <div className="total-courses" id="Courses">
      <div className="title-courses" data-aos="fade-down" data-aos-duration="3000">
        <p>Courses We Offer</p>
      </div>
      <div className="courses-section">
        {courses.map((course, index) => (
          <div className="course-card" data-aos="flip-left" data-aos-duration="2000" key={index}>
            <img className="course-logos" src={course.image} alt={course.alt} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-section" data-aos="fade-up" data-aos-duration="2000">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {showPopup && (
  <div
    className={`popup ${
      popupMessage === "Invalid email format"
        ? "invalid-email"
        : popupMessage === "This email is already subscribed!"
        ? "already-subscribed"
        : "subscribed-success"
    }`}
  >
    <p>{popupMessage}</p>
  </div>
)}


      <div className="newsletter" data-aos="fade-up" data-aos-duration="2000">
        <h2>Sign Up for Our Newsletter</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
}

export default Courses;
