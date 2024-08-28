import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = [
    { src: '/assets/images/landing/gallery1.jpg', alt: 'Product 1', title: 'Sleek Design' },
    { src: '/assets/images/landing/gallery2.jpg', alt: 'Product 2', title: 'Innovative Features' },
    { src: '/assets/images/landing/gallery3.jpg', alt: 'Product 3', title: 'Durable Materials' },
    { src: '/assets/images/landing/gallery4.jpg', alt: 'Product 4', title: 'User-Friendly Interface' },
    { src: '/assets/images/landing/gallery5.jpg', alt: 'Product 5', title: 'Versatile Applications' },
    { src: '/assets/images/landing/gallery6.jpg', alt: 'Product 6', title: 'Exceptional Performance' },
  ];

  return (
    <Container maxWidth={false} sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Gallery
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)', gap: 4 }}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: 1,
                textAlign: 'center',
                transition: 'opacity 0.3s ease',
                opacity: 0,
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              <Typography variant="subtitle1">{image.title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Gallery;