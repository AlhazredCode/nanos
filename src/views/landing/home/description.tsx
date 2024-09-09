'use client';
import Image from 'next/image';
import { Grid, Typography, Button, Container, useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Description = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Thoughtful Hospitality
              </Typography>
              <Typography variant="body1" paragraph>
                Our restaurant handlers are designed to enhance the dining experience for your guests. 
                They provide a convenient and discreet way for customers to store their belongings, 
                keeping tables clutter-free and creating a more inviting atmosphere.
              </Typography>
              <Button variant="contained" color="primary" size="large"  onClick={() => window.open(`https://wa.me/13058046310`, '_blank')}>
                Contact Sales
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{ 
              position: 'relative', 
              width: '100%', 
              overflow: 'hidden',
              paddingTop: '56.25%' // Mantén la relación de aspecto 16:9
            }}>
              <Image
                src="/assets/images/landing/detail.png"
                alt="Description Image"
                layout="fill"
                objectFit="cover"
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '10%',
                background: 'linear-gradient(to top, #121212, transparent)'
              }} />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;