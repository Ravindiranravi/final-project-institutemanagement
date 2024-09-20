// src/components/PageNotFound.js
import React from 'react';
import { Typography, Container } from '@mui/material';
import './PageNotFound.css'; // Optional if you want to add custom styling

const PageNotFound = () => {
  return (
    <Container 
      maxWidth="xs" 
      className="page-not-found-container" // Unique class name
    >
      <img 
        src="/images/404.png" 
        alt="Page Not Found" 
        className="page-not-found-image" 
      />
      <Typography 
        variant="h4" 
        className="page-not-found-text"
      >
        404 - Page Not Found
      </Typography>
    </Container>
  );
};

export default PageNotFound;
