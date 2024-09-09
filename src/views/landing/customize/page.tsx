
'use client';
import React, { useState } from 'react';
import { Grid, Box, Typography, Button, Container, useMediaQuery, useTheme, Tabs, Tab, Chip, TextField, Modal } from '@mui/material';
import Image from 'next/image';
import Products from '@/api/products';
import { Product } from '@/types/product';
import { Stack } from '@mui/material';
import Variants from '@/api/variants';
import Variant from '@/api/variants';
import BuyModal from './buymodal';
const LIGHT_GRAY = '#1a1a1a';


const ProductSelector = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedProduct, setSelectedProduct] = useState<Product>(Products[0]);
  const [selectedVariant, setSelectedVariant] = useState(Products[0].variants[0]);
  const [selectedTab, setSelectedTab] = useState(0); // 0 for Gloss, 1 for Satin
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

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

  // Función para abrir el modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const handleConfirmOrder = () => {
    // 1. Obtener referencias a los campos del formulario en BuyModal
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const detailsInput = document.getElementById('details') as HTMLInputElement;

    // 2. Recolectar datos de la orden
    const orderData = {
      product: selectedProduct.name,
      quantity: quantity,
      color: selectedVariant.name.replace(/([a-z])([A-Z])/g, '$1 $2').split('-').slice(1).join(' '),
      name: nameInput.value,
      address: addressInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      details: detailsInput.value
    };

    // 3. Construir la URL de WhatsApp
    const phoneNumber = "13058046310";
    const message = `New Order:\n\nProduct: ${orderData.product}\nQuantity: ${orderData.quantity}\nColor: ${orderData.color}\nName: ${orderData.name}\nAddress: ${orderData.address}\nPhone: ${orderData.phone}\nEmail: ${orderData.email}\nDetails: ${orderData.details}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // 4. Abrir la URL en una nueva pestaña
    window.open(whatsappURL, "_blank");

    // 5. Cerrar el modal (opcional)
    handleCloseModal();
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="lg" sx={{ py: { md: 4, lg: 8 }, display: 'flex', justifyContent: 'center' }}>
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
          <Stack
            direction={{ md: 'column', lg: 'row' }}
            spacing={4}
            sx={{ mt: 4, width: '100%' }}
          >
            {/* Product Details */}
            <Grid item md={12} lg={8} sx={{ backgroundColor: LIGHT_GRAY, px: 4, py: 4, borderRadius: 4, width: '100%', mb: { md: 2, lg: 0 } }}>
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, borderRadius: 12, overflow: 'hidden' }}>
    <Image src={selectedVariant.image} alt={selectedProduct.name} width={400} height={400} objectFit="cover" style={{ borderRadius: 8 }} />
  </Box>

  {/* Título y chip de color en la misma línea con space-between */}
  <Grid container alignItems="center" justifyContent="space-between" mt={2}>
    <Grid item>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {selectedProduct.name}
      </Typography>
    </Grid>
    <Grid item display="flex" alignItems="center">
      <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>Color:</Typography>
      <Chip
        label={selectedVariant.name.replace(/([a-z])([A-Z])/g, '$1 $2').split('-').slice(1).join(' ')}
        avatar={<Image src={selectedVariant.materialImage} alt={selectedVariant.name} width={20} height={20} />}
      />
    </Grid>
  </Grid>

  {/* Precio total y cantidad en la siguiente línea con space-between */}
  <Grid container alignItems="center"  mt={2}>
    <Grid item>
      <Typography variant="h4" sx={{ fontWeight: 'bold' , color: 'gray'}}>
        ${(selectedProduct.price * quantity).toFixed(2)}
      </Typography>
    </Grid>
    <Grid item>
      <TextField
      size='small'
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          mx: 4,
          width: 80,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'gray', 
            },
            '&:hover fieldset': {
              borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
            display: 'none',
          },
          '& input': { 
            textAlign: 'center',
          },
        }}
      />
    </Grid>
  </Grid>

  {/* Tags en chips outlined pequeños */}
  <Grid container spacing={1} mt={1}>
    {selectedProduct.tags.map((tag) => (
      <Grid item key={tag}>
        <Chip label={tag} variant="outlined" size="small" sx={{p:1}} />
      </Grid>
    ))}
  </Grid>

  <Typography variant="body1" paragraph sx={{ mt: 2 }}>
    {selectedProduct.description}
  </Typography>

  <Button variant="contained" fullWidth color="primary" size="large" sx={{ p: 2 }} onClick={handleOpenModal}>
    Buy
  </Button>
</Grid>
            {/* Variant Selector */}
            <Grid item xs={12} md={12} lg={4} sx={{ backgroundColor: LIGHT_GRAY, px: 4, py: 4, borderRadius: 4 }}>
              <Typography variant="h6" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                Select Variant
              </Typography>

              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleTabChange} centered>
                  <Tab label="Gloss" />
                  <Tab label="Satin" />
                </Tabs>
              </Box>

              {/* Renderizado condicional para variantes */}
              {isMobile ? (
                // Stack con scroll horizontal para mobile y tablet (xs, sm y md)
                <Box
                  sx={{
                    mt: 2,
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': {
                      height: '8px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#888',
                      borderRadius: '4px',
                    }
                  }}
                >
                  <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 4 }}>
                    {filteredVariants.map((variant) => (
                      <Box
                        key={variant.name}
                        onClick={() => handleVariantSelect(variant)}
                        sx={{
                          cursor: 'pointer',
                          border: selectedVariant.name === variant.name ? '2px solid white' : '1px solid #a1a1a1',
                          borderRadius: 1,
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          minWidth: 150,
                        }}
                      >
                        <Image
                          src={variant.materialImage}
                          alt={variant.name}
                          width={70}
                          height={70}
                          style={{ objectFit: 'contain' }}
                        />
                        <Typography variant="body2" align="center" sx={{
                          mt: 0.5,
                          fontWeight: 'bold',
                          color: '#666',
                          fontSize: '0.7rem',
                          lineHeight: 1.5,
                          minHeight: '3rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          {variant.name.replace(/([a-z])([A-Z])/g, '$1 $2').split('-').slice(1).join(' ')}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ) : (
                // Grid para desktop (lg)
                <Grid container spacing={2} sx={{ mt: 2, justifyContent: 'center' }}>
                  {filteredVariants.map((variant) => (
                    <Grid item key={variant.name} lg={4}>
                      <Box
                        onClick={() => handleVariantSelect(variant)}
                        sx={{
                          cursor: 'pointer',
                          border: selectedVariant.name === variant.name ? '2px solid white' : '1px solid #a1a1a1',
                          borderRadius: 1,
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          maxWidth: 200,
                        }}
                      >
                        <Image
                          src={variant.materialImage}
                          alt={variant.name}
                          width={70}
                          height={70}
                          style={{ objectFit: 'contain' }}
                        />
                        <Typography variant="body2" align="center" sx={{
                          mt: 0.5,
                          fontWeight: 'bold',
                          color: '#666',
                          fontSize: '0.7rem',
                          lineHeight: 1.5,
                          minHeight: '3rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          {variant.name.replace(/([a-z])([A-Z])/g, '$1 $2').split('-').slice(1).join(' ')}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Stack>
        </Grid>
      </Container>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="buy-modal-title"
        aria-describedby="buy-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4
        }}>
          <BuyModal
            product={selectedProduct}
            quantity={quantity}
            color={selectedVariant.name.replace(/([a-z])([A-Z])/g, '$1 $2').split('-').slice(1).join(' ')} // Color
            materialImage={selectedVariant.materialImage} // Imagen del material
          />
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth onClick={handleCloseModal}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth color="primary" onClick={handleConfirmOrder}>
                Confirm
              </Button>

            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductSelector;



