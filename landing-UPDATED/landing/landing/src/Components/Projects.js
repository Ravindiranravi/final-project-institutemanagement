import React, { useState } from 'react';
import './projects.css'; // For styling
import QTech from '../assets/QTech.webp';
import AI from '../assets/AI.jpeg';
import BC from '../assets/BC.webp';
import Smt from '../assets/Smt.png';
import Trdstc from '../assets/Trdstc.jpg';
import Finance from '../assets/Finance.webp';
import FoodApp from '../assets/FoodApp.png';
import Socdash from '../assets/Socdash.png';
import Health from '../assets/Health.webp';
import Ecommerce from '../assets/Ecommerce.jpg';
import IOT from '../assets/IOT.webp';
import AR from '../assets/AR.webp';
import Collabe from '../assets/Collabe.png';
import AAI from '../assets/AIAG.png';
import VR from '../assets/Voice.avif';


const projectsData = [
  // Existing projects
  {
    id: 1,
    title: 'Quantum Computing Simulation',
    description: 'A simulation platform for quantum computing using cutting-edge algorithms.',
    image: QTech, // Image file path
    technologies: ['Python', 'Qiskit', 'React'],
    link: 'https://quantumtechhd.com',
    github: 'https://github.com/quantum-simulation',
    status: 'Completed',
    duration: '6 months',
  },
  {
    id: 2,
    title: 'AI-Powered Chatbot',
    description: 'An advanced chatbot powered by AI for customer support and engagement.',
    image: AI, // Image file path
    technologies: ['Node.js', 'TensorFlow', 'Chatbot'],
    link: '/projects/ai-chatbot',
    github: 'https://github.com/ai-chatbot',
    status: 'In Progress',
    duration: '3 months',
  },
  {
    id: 3,
    title: 'Blockchain-based Voting System',
    description: 'A secure and transparent voting system built on blockchain technology.',
    image: BC, // Image file path
    technologies: ['Solidity', 'Ethereum', 'React'],
    link: '/projects/blockchain-voting',
    github: 'https://github.com/blockchain-voting',
    status: 'Completed',
    duration: '4 months',
  },
  {
    id: 4,
    title: 'Smart Home Automation',
    description: 'A system for automating and controlling smart home devices.',
    image: Smt, // Image file path
    technologies: ['IoT', 'Python', 'Home Assistant'],
    link: '/projects/smart-home',
    github: 'https://github.com/smart-home',
    status: 'In Progress',
    duration: '5 months',
  },
  {
    id: 5,
    title: 'Virtual Reality Learning Environment',
    description: 'A VR-based learning environment to enhance education through immersive experiences.',
    image: VR, // Image file path
    technologies: ['Unity', 'C#', 'Oculus Rift'],
    link: '/projects/vr-learning',
    github: 'https://github.com/vr-learning',
    status: 'Completed',
    duration: '8 months',
  },

  // New Projects
  {
    id: 6,
    title: 'Real-Time Stock Market Tracker',
    description: 'An application to track and visualize real-time stock market data and trends.',
    image: Trdstc,
    technologies: ['React', 'Node.js', 'Chart.js'],
    link: '/projects/stock-tracker',
    github: 'https://github.com/stock-tracker',
    status: 'Planning',
    duration: '4 months',
  },
  {
    id: 7,
    title: 'Personal Finance Manager',
    description: 'A web app to manage personal finances, track expenses, and set budgets.',
    image: Finance,
    technologies: ['React', 'Express.js', 'MongoDB'],
    link: '/projects/finance-manager',
    github: 'https://github.com/finance-manager',
    status: 'In Progress',
    duration: '3 months',
  },
  {
    id: 8,
    title: 'Food Delivery Service App',
    description: 'A mobile app for ordering food from local restaurants with real-time tracking.',
    image:FoodApp,
    technologies: ['React Native', 'Firebase', 'Stripe'],
    link: '/projects/food-delivery',
    github: 'https://github.com/food-delivery',
    status: 'Completed',
    duration: '6 months',
  },
  {
    id: 9,
    title: 'Social Media Dashboard',
    description: 'A dashboard to monitor and analyze social media metrics and engagement.',
    image: Socdash,
    technologies: ['Angular', 'D3.js', 'Firebase'],
    link: '/projects/social-media-dashboard',
    github: 'https://github.com/social-media-dashboard',
    status: 'Planning',
    duration: '5 months',
  },
  {
    id: 10,
    title: 'Health Monitoring System',
    description: 'A system for monitoring health metrics with alerts and data visualization.',
    image: Health,
    technologies: ['Python', 'Flask', 'MySQL'],
    link: '/projects/health-monitoring',
    github: 'https://github.com/health-monitoring',
    status: 'Completed',
    duration: '7 months',
  },
  {
    id: 11,
    title: 'E-Commerce Website',
    description: 'A full-featured e-commerce platform with product listings, cart, and payment integration.',
    image: Ecommerce,
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '/projects/e-commerce',
    github: 'https://github.com/e-commerce',
    status: 'In Progress',
    duration: '4 months',
  },
  {
    id: 12,
    title: 'IoT Weather Station',
    description: 'A weather station that collects and displays weather data from IoT sensors.',
    image: IOT,
    technologies: ['Arduino', 'Node.js', 'React'],
    link: '/projects/iot-weather-station',
    github: 'https://github.com/iot-weather-station',
    status: 'Completed',
    duration: '3 months',
  },
  {
    id: 13,
    title: 'Augmented Reality Navigation App',
    description: 'An AR app for providing navigation directions in real-time using augmented reality.',
    image: AR,
    technologies: ['Unity', 'ARCore', 'Android'],
    link: '/projects/ar-navigation',
    github: 'https://github.com/ar-navigation',
    status: 'Planning',
    duration: '5 months',
  },
  {
    id: 14,
    title: 'Collaborative Document Editor',
    description: 'A real-time collaborative document editor for multiple users.',
    image: Collabe,
    technologies: ['React', 'Firebase', 'Quill'],
    link: '/projects/collaborative-editor',
    github: 'https://github.com/collaborative-editor',
    status: 'In Progress',
    duration: '4 months',
  },
  {
    id: 15,
    title: 'AI-Driven Content Generator',
    description: 'An AI-powered tool to generate content based on user input and preferences.',
    image: AAI,
    technologies: ['Python', 'GPT-3', 'Flask'],
    link: '/projects/content-generator',
    github: 'https://github.com/content-generator',
    status: 'Planning',
    duration: '6 months',
  },
  {
    id: 16,
    title: 'Voice-Controlled Smart Assistant',
    description: 'A smart assistant that responds to voice commands for home automation.',
    image: VR,
    technologies: ['Python', 'Speech Recognition', 'Raspberry Pi'],
    link: '/projects/voice-assistant',
    github: 'https://github.com/voice-assistant',
    status: 'In Progress',
    duration: '5 months',
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Search and filter projects based on the search term
  const filteredProjects = projectsData.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  // Function to get status class
  const getStatusClass = (status) => {
    switch (status) {
      case 'Planning':
        return 'status-planning';
      case 'In Progress':
        return 'status-in-progress';
      case 'Completed':
        return 'status-completed';
      default:
        return '';
    }
  };

  return (
    <div className="projects-section">
      <h2 className="section-title">Our Projects</h2>

      {/* Search Input */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search Projects..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className={`project-status ${getStatusClass(project.status)}`}>
                <strong>Status:</strong> {project.status}
              </p>
              <p className="project-duration"><strong>Duration:</strong> {project.duration}</p>

              <ul className="project-technologies">
                
                {project.technologies.map((tech) => (
                  <li key={tech} className="tech-item">{tech}</li>
                ))}
              </ul>

              {/* Hover Effect: Show more information */}
              <div className="project-more-info">
                {/* Add more information if needed */}
                {/* For example, you could use: */}
                {/* <p><strong>Details:</strong> {project.details}</p> */}
              </div>

              <div className="project-links">
                <a href={project.link} className="project-link">Learn More</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"The VR Learning project has revolutionized the way we teach and learn."</p>
            <h4>- Ravindira Jadeja, Educator</h4>
          </div>
          <div className="testimonial">
            <p>"The AI-Powered Chatbot improved our customer service by 200%!"</p>
            <h4>- Suresh Raina, Business Owner</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
