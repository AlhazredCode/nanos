import React from 'react';
import Image from 'next/image';
import { Grid, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';

const Description = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} order={isMobile ? 2 : 1}> 
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Powerful Headline That Grabs Attention
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="body1" paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} order={isMobile ? 1 : 2}> 
          <Image 
            src="/assets/images/landing/your-image.jpg" // Replace with your image
            alt="Description Image"
            layout="responsive"
            width={500}
            height={300}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;