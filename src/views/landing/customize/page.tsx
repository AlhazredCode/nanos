'use client';
// app/customize/page.tsx


import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

const Customize: React.FC = () => {
    const theme = useTheme();
  return (
    
          <Box sx={{bgcolor: theme.palette.background.default}}>
    
      <Box sx={{minHeight: 800}}>
      <h1>Página de Personalización</h1>
      </Box>
     
      </Box>
    
  );
};

export default Customize;