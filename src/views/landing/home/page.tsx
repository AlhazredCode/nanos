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
import Animadiv from '@/app/animations/animadiv';

function LandingPage() {
  return (
    <Box sx={{ minHeight: '100%' }}>
      <Box sx={{ minHeight: 800 }}>
        <Hero />

        <Animadiv variant="slideInLeft" duration={1}>
          <Box sx={{ width: '100vw' }}>
            <Features />
          </Box>
        </Animadiv>

        <Animadiv variant="slideInRight" duration={1.2}>
          <Box sx={{ width: '100vw' }}>
            <Description />
          </Box>
        </Animadiv>

        <Animadiv variant="slideInBottom" duration={0.8} delay={0.2}>
          <Box sx={{ width: '100vw' }}>
            <Models />
          </Box>
        </Animadiv>

        <Animadiv variant="slideInTop" duration={0.8} delay={0.4}>
          <Box sx={{ width: '100vw' }}>
            <Dimensions />
          </Box>
        </Animadiv>

        <Animadiv variant="fadeIn" duration={0.8} delay={0.6}>
          <Box sx={{ width: '100vw' }}>
            <Cta />
          </Box>
        </Animadiv>

        <Animadiv variant="slideInLeft" duration={1} delay={0.8}>
          <Box sx={{ width: '100vw' }}>
            <Gallery />
          </Box>
        </Animadiv>
      </Box>
    </Box>
  );
}

export default LandingPage;