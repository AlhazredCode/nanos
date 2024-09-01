'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Products from '@/api/products';

const lightImages = Products.map((product) => product.variants[0].lightImage);

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Genera un índice aleatorio dentro del rango del array de imágenes
      const randomIndex = Math.floor(Math.random() * lightImages.length);
      setCurrentImageIndex(randomIndex);
    }, 2800); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: isMobile ? 300 : 500, 
      overflow: 'hidden', 
      display: 'flex', 
      justifyContent: 'center' 
    }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ x: isMobile ? 0 : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: isMobile ? 0 : '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ 
            position: 'absolute', 
            width: isMobile ? '100%' : '50%', // Ajusta el ancho según sea necesario
            height: '100%'
          }}
        >
          <Image src={lightImages[currentImageIndex]} alt={`Product ${currentImageIndex + 1}`} 
                 width={isMobile ? 600 : 1000} // Ajusta el ancho de la imagen 
                 height={isMobile ? 300 : 500} // Ajusta la altura de la imagen
                 objectFit="cover" 
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Gallery;