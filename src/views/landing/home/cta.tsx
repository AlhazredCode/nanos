import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Cta = () => {
  return (
    <Box
      sx={{
        bgcolor: 'gray',
        py: { xs: 6, md: 12 },
        backgroundImage: 'url(/assets/images/landing/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom', // Alinea la imagen desde abajo
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          Elevate Your Guest Experience
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: 'white', mb: 4 }}>
          Contact us today for a custom solution.
        </Typography>
      </Container>
    </Box>
  );
};

export default Cta;