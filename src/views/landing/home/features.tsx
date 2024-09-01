'use client';
import Image from 'next/image';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// assets
const imgfeature1 = '/assets/images/landing/feature1.svg';
const imgfeature2 = '/assets/images/landing/feature2.svg';
const imgfeature3 = '/assets/images/landing/feature3.svg';

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function Features() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        Don't let the Bags on the Floor
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
          Elevate your restaurant experience with our innovative handlers
        </Typography>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }} 
      >
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
          {[
            { image: imgfeature1, title: 'Enhance the Ambiance', subtitle: 'Create a welcoming and stylish atmosphere' },
            { image: imgfeature2, title: 'Timeless Design', subtitle: 'Elegant and durable, built to last' },
            { image: imgfeature3, title: 'Thoughtful Hospitality', subtitle: 'Improve the guest experience with ease' }
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ p: 3 }}>
                <Stack spacing={1} direction="row">
                  <Grid item xs={12}>
                    <Image src={feature.image} alt="feature" width={48} height={48} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" color="primary">
                      {feature.title}
                    </Typography>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}