'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  const images = [
    '/assets/images/landing/hero1.jpg',
    '/assets/images/landing/hero2.jpg',
    '/assets/images/landing/hero3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '90vh',
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-image 1s ease-in-out', // Smooth transition
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          Welcome to Our Product
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Customize
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;