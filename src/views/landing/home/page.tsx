'use client';
import React from 'react';
import { Box } from '@mui/material';
import Hero from './hero';
import Description from './description';
import Features from './features';
import Models from './models';
import Dimensions from './dimensions';
import Cta from './cta';
import Gallery from './gallery';
import About from './about';
import Info from './info';

function LandingPage() {
  return (
    <Box sx={{ minHeight: '100%' }}>
      <Box sx={{ minHeight: 800 }}>
        <Hero />
        <Info />
        <About />
        <Gallery />
        <Box sx={{ width: '100vw' }}>
          <Features />
        </Box>
        <Box sx={{ width: '100vw' }}>
          <Description />
        </Box>
        <Box sx={{ width: '100vw' }}>
          <Models />
        </Box>
        <Box sx={{ width: '100vw' }}>
          <Cta />
        </Box>
        <Box sx={{ width: '100vw' }}>
          <Dimensions />
        </Box>
       
      </Box>
    </Box>
  );
}

export default LandingPage;