'use client';
import Image from 'next/image';
import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Image src="/assets/images/Logo-white.svg" alt="Logo" width={100} height={100} /> {/* Ajusta el ancho y alto del logo */}
        </Box>

        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          N&S DISTRIBUTORS 
        </Typography>

        <Typography variant="body1" align="center" color="textSecondary" paragraph>
          We are a full-service importer who considers your company growth as our responsibility. We represent your brand 
          through focused and personalized service, accompanying you through the whole product cycle.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default Info;