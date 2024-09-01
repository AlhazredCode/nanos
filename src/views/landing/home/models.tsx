import React from 'react';
import { Grid, Typography, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Products from '@/api/products'; // Importa el objeto Products

const Models = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const models = [
    {
      image: Products[0].variants[0].lightImage, // Accede a la imagen light del primer producto
      name: 'Tripod Base',
    },
    {
      image: Products[1].variants[0].lightImage, // Accede a la imagen light del segundo producto
      name: 'Circular Base',
    },
    {
      image: Products[2].variants[0].lightImage, // Accede a la imagen light del tercer producto
      name: 'Classic Base',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Our Models
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          Choose the perfect base for your needs
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent={isMobile ? 'center' : 'space-between'} sx={{ mt: 2 }}>
        {models.map((model, index) => (
          <Grid item xs={12} sm={4} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
           
            
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 250 }}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: isMobile ? 120 : 150,
                    height: isMobile ? 120 : 150,
                    boxShadow: 3,
                  }}
                >
                  <Image
                    src={model.image}
                    alt={model.name}
                    width={isMobile ? 120 : 150}
                    height={isMobile ? 120 : 150}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                  {model.name}
                </Typography>
              </Box>
           
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Models;