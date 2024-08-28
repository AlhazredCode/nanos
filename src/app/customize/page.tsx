// app/customize/page.tsx

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Box } from '@mui/material';
const Customize: React.FC = () => {
  return (
    <div>
      <Header />
   
      <Box sx={{minHeight: 800}}>
      <h1>Página de Personalización</h1>
      </Box>
      <Footer />
    </div>
  );
};

export default Customize;