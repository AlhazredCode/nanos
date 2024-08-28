import React from 'react'
import Button from '@mui/material/Button'; 
import Header from '@/components/header';
import { Box } from '@mui/material';
import Footer from '@/components/footer';

function LandingPage() {
  return (
    <Box sx={{minHeight: '100%'}}>
        <Header/>
        <Box sx={{minHeight: 800}}>
        </Box>
        <Footer/>
    </Box>
  )
}

export default LandingPage