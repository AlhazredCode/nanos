import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';

const Cta = () => {
  return (
    <Box
      sx={{
        bgcolor: 'gray', // Light gray background
        py: { xs: 4, md: 8 }, // Vertical padding
        backgroundImage: 'url(/assets/images/landing/cta-background.jpg)', // Replace with your image path
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'white' }}>
          Join us today and experience the difference!
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Sign Up Now
        </Button>
      </Container>
    </Box>
  );
};

export default Cta;