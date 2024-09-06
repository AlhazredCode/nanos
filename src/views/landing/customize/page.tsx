
'use client';
import React, { useState } from 'react';
import { Grid, Box, Typography, Button, Container, useMediaQuery, useTheme, Tabs, Tab } from '@mui/material';
import Image from 'next/image';
import Products from '@/api/products';
import { Product } from '@/types/product';
import { Stack } from '@mui/material';
import Variants from '@/api/variants';
import  Variant  from '@/api/variants';
const LIGHT_GRAY = '#1a1a1a';

const ProductSelector = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedProduct, setSelectedProduct] = useState<Product>(Products[0]);
  const [selectedVariant, setSelectedVariant] = useState(Products[0].variants[0]);
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Gloss, 1 for Satin

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]);
  };

  const handleVariantSelect = (variant: typeof Variant[number]) => {
    const newImage = `/assets/images/products/Model${selectedProduct.id}/${variant.name}.png`; // Genera la URL de la imagen
    setSelectedVariant({ ...selectedVariant, name: variant.name, materialImage: variant.materialImage, image: newImage });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const filteredVariants = Variants.filter((variant) => {
    if (selectedTab === 0) {
      return variant.name.startsWith('Gloss');
    } else {
      return variant.name.startsWith('Satin');
    }
  });

  return (
    <Box sx={{ width: '100%' }}>
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={4} sx={{ width: '100%' }}>
        {/* Select Your Model Section */}
        <Grid item xs={12} sx={{ backgroundColor: LIGHT_GRAY, px: 2, py: 2, borderRadius: 2 }}>
          <Grid item sx={{ mb: 2 }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
              Select Your Hangler
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
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
                  border: selectedProduct.id === product.id ? '2px solid white' : '1px solid #333333',
                  borderRadius: 2,
                  p: 2,
                  backgroundColor: selectedProduct.id === product.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image src={product.defaultImage} alt={product.name} width={isMobile ? 80 : 100} height={isMobile ? 80 : 100} style={{ borderRadius: 4 }} />
                <Typography variant="body2" sx={{ color: selectedProduct.id === product.id ? 'white' : '#cccccc', mt: 1, fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Grid>

        {/* Product Details and Variant Selector */}
        <Stack direction="row" spacing={4} sx={{ mt: 4, width: '100%' }}>
          {/* Product Details */}
          <Grid item xs={12} md={8} sx={{ backgroundColor: LIGHT_GRAY, px: 4, py: 4, borderRadius: 4, width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, borderRadius: 12, overflow: 'hidden' }}>
              <Image src={selectedVariant.image} alt={selectedProduct.name} width={400} height={400} objectFit="cover" style={{ borderRadius: 8 }} />
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
  <Typography variant="h6" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
    Select Variant
  </Typography>

  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={selectedTab} onChange={handleTabChange} centered>
      <Tab label="Gloss" />
      <Tab label="Satin" />
    </Tabs>
  </Box>

  <Grid container spacing={2} sx={{ mt: 1, justifyContent: 'center' }}>
    {filteredVariants.map((variant) => (
      <Grid item xs={12} sm={6} md={4} key={variant.name}>
        <Box
          onClick={() => handleVariantSelect(variant)} 
          sx={{
            cursor: 'pointer',
            border: selectedVariant.name === variant.name ? '2px solid white' : '1px solid #a1a1a1',
            borderRadius: 1,
            p: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '100%', // Ajustar el tamaño de la imagen
          }}
        >
          <Image src={variant.materialImage} alt={variant.name} width={isMobile ? 100 : 150} height={isMobile ? 100 : 150} 
                 style={{ maxWidth: '100%', height: 'auto' }} /> {/* Ajustar tamaño de imagen */}
<Typography variant="body2" align="center" sx={{ 
  mt: 0.5, 
  fontWeight: 'bold', 
  color: '#666', 
  fontSize: '0.7rem', 
  lineHeight: 1.5,  // Ajustar la altura de línea para 2 líneas
  minHeight: '3rem', // Definir una altura mínima para el contenedor
  display: 'flex', 
  alignItems: 'center', // Centrar verticalmente el texto
  justifyContent: 'center', // Centrar horizontalmente el texto
}}>
  {variant.name.replace(/([a-z])([A-Z])/g, '$1 $2').split('-').slice(1).join(' ')}
</Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Grid>
        </Stack>
      </Grid>
    </Container>
  </Box>
  );
};

export default ProductSelector;