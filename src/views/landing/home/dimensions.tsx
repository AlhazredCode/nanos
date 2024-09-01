import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';

const Dimensions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        Dimensions
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        Perfectly sized for any restaurant
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'center' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? '/assets/images/landing/dimensions1.png' : '/assets/images/landing/dimensions2.png'}
          alt="Dimensions"
          width={isMobile ? 500 : 900}
          height={isMobile ? 500 : 900}
          style={{ maxWidth: '80%', height: 'auto', transition: '0.3s ease' }} // Transición suave
        />
      </Box>
    </Container>
  );
};

export default Dimensions;