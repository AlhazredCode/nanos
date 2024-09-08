'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import Products from '@/api/products';

//  Obtener todas las imágenes de las variantes de todos los productos
const allImages: string[] = Products.reduce((acc: string[], product) => {
  return acc.concat(product.variants.map((variant) => variant.image));
}, []);

const Gallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allImages.length);
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
      justifyContent: 'center',
      alignItems: 'center'
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
            width: 'auto',
            height: isMobile ? 300 : 500,
            maxWidth: '100%',
          }}
        >
          <Image
            src={allImages[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            width={isMobile ? 400 : 500}
            height={isMobile ? 400 : 500}
            objectFit="contain"
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Gallery;