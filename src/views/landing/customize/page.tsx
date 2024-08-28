'use client';
import React, { useState } from 'react';
import { Grid, Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Products from '@/api/products';
import { Product } from '@/types/product';

const ProductSelector = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedProduct, setSelectedProduct] = useState<Product>(Products[0]);
  const [selectedVariant, setSelectedVariant] = useState(Products[0].variants[0]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]); // Reset selected variant when product changes
  };

  const handleVariantSelect = (variant: { name: string; thumbnail: string; detailImage: string }) => {
    setSelectedVariant(variant);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Select Your Model
      </Typography>

      {/* Product Images */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        {Products.map((product) => (
          <Box
            key={product.id}
            onClick={() => handleProductSelect(product)}
            sx={{
              cursor: 'pointer',
              mx: 2,
              border: selectedProduct.id === product.id ? '2px solid blue' : 'none', // Highlight selected product
              borderRadius: 1,
            }}
          >
            {/* Use the first variant's thumbnail for product selection */}
            <Image src={product.variants[0].thumbnail} alt={product.name} width={isMobile ? 100 : 150} height={isMobile ? 100 : 150} />
          </Box>
        ))}
      </Box>

      {/* Product Details and Variant Selector */}
      <Grid container spacing={4}>
        {/* Product Details */}
        <Grid item xs={12} md={8}>
          {/* Use the selected variant's detailImage for the main image */}
          <Image src={selectedVariant.detailImage} alt={selectedProduct.name} width={isMobile ? 300 : 600} height={isMobile ? 300 : 400} />
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
            {selectedProduct.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {selectedProduct.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Price: ${selectedProduct.price}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>

        {/* Variant Selector */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Select Variant
          </Typography>
          {selectedProduct.variants.map((variant) => (
            <Box
              key={variant.name}
              onClick={() => handleVariantSelect(variant)}
              sx={{
                cursor: 'pointer',
                my: 1,
                border: selectedVariant.name === variant.name ? '2px solid blue' : 'none', // Highlight selected variant
                borderRadius: 1,
              }}
            >
              <Image src={variant.thumbnail} alt={variant.name} width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />
              <Typography variant="body2">{variant.name}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductSelector;