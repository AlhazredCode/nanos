'use client';
import React, { useState } from 'react';
import { Grid, Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Products from '@/api/products';
import { Product } from '@/types/product';
import {Stack} from '@mui/material';
import { borderRadius } from '@mui/system';

const LIGHT_GRAY = '#1a1a1a';

const ProductSelector = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedProduct, setSelectedProduct] = useState<Product>(Products[0]);
  const [selectedVariant, setSelectedVariant] = useState(Products[0].variants[0]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]);
  };

  const handleVariantSelect = (variant: { name: string; lightImage: string; darkImage: string; materialImage: string; detailImage: string }) => {
    setSelectedVariant(variant);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="lg"  sx={{ py: { xs: 4, md: 8 }, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4} sx={{ width: '100%' }}>
          {/* Select Your Model Section */}
          <Grid item xs={12} sx={{ backgroundColor: LIGHT_GRAY, px: 2, py: 2, borderRadius: 2 }}>
          <Grid item sx={{mb:2}}>
            <Typography variant="h5"  align="center" sx={{ fontWeight: 'bold' }}>
              Select Your Hangler
            </Typography>
            <Typography variant="subtitle1"  align="center" color="textSecondary">
              Choose from our range of customizable models
            </Typography>
          </Grid>
  {/* Product Images */}
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    {Products.map((product) => (
      <Stack
        key={product.id}
        onClick={() => handleProductSelect(product)}
        sx={{
          cursor: 'pointer',
          mx: 2,
          border: selectedProduct.id === product.id ? '2px solid white' : '1px solid #333333', // Borde gris claro si no está seleccionado
          borderRadius: 2, // Borde redondeado
          p: 2, // Padding
          backgroundColor: selectedProduct.id === product.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent', // Fondo blanco con opacidad 10% si está seleccionado
          alignItems: 'center',
          transition: 'transform 0.2s ease', // Transición suave al hacer hover
          '&:hover': {
            transform: 'scale(1.05)', // Aumenta el tamaño al hacer hover
          },
        }}
      >
        <Image src={product.variants[0].darkImage} alt={product.name} width={isMobile ? 100 : 150} height={isMobile ? 100 : 150} style={{ borderRadius: 4 }} /> {/* Doble border radius */}
        <Typography variant="body2" sx={{ color: selectedProduct.id === product.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>{/* Color blanco si está seleccionado, gris 20% más claro si no */}
          {product.name}
        </Typography>
      </Stack>
    ))}
  </Box>
</Grid>

          {/* Product Details and Variant Selector */}
          <Stack direction='row' spacing={4} sx={{ mt: 4 , width: '100%'}} >
            {/* Product Details */}
            <Grid item xs={12} md={8} sx={{ backgroundColor: LIGHT_GRAY, px: 4, py: 4, borderRadius: 4, width: '100%' }}>
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, borderRadius: 12, overflow: 'hidden' }}>
    <Image src={selectedVariant.lightImage} alt={selectedProduct.name} width={400} height={400} objectFit="cover"  style={{borderRadius:8}}/>
  </Box>

  <Grid container alignItems="center" justifyContent="space-between" mt={2}>
    <Grid item>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {selectedProduct.name}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        ${selectedProduct.price}
      </Typography>
    </Grid>
  </Grid>

  <Typography variant="body1" paragraph sx={{ mt: 2 }}>
    {selectedProduct.description}
  </Typography>

  <Button variant="contained" fullWidth color="primary" size="large">
    Buy
  </Button>
</Grid>

            {/* Variant Selector */}
            <Grid item xs={12} md={4} sx={{ backgroundColor: LIGHT_GRAY, px: 4, py: 4, borderRadius: 4 }}>
              <Typography variant="h6" gutterBottom>
                Select Variant
              </Typography>
              <Stack direction='column'  spacing={2}>
                {selectedProduct.variants.map((variant) => (
                  <Grid item xs={12} sm={6} key={variant.name}>
                    <Box
                      onClick={() => handleVariantSelect(variant)}
                      sx={{
                        cursor: 'pointer',
                        border: selectedVariant.name === variant.name ? '2px solid white' : '1px solid #a1a1s',
                        borderRadius: 1,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Image src={variant.materialImage} alt={variant.name} width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />
                      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                        {variant.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductSelector;