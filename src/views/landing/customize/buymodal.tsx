// BuyModal.tsx
import React from 'react';
import { Typography, Box, TextField, Grid, Chip } from '@mui/material';
import Image from 'next/image';
import { Product } from '@/types/product';

interface BuyModalProps {
  product: Product;
  quantity: number;
  color: string; 
  materialImage: string;
}

const LIGHT_GRAY = '#1a1a1a';

const BuyModal: React.FC<BuyModalProps> = ({ product, quantity, color, materialImage }) => {
  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
        Purchase Confirmation
      </Typography>

      <Box sx={{ backgroundColor: LIGHT_GRAY, p: 2, borderRadius: 2, mb: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Image src={product.defaultImage} alt={product.name} width={80} height={80} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">Quantity: {quantity}</Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>Color:</Typography>
              <Chip label={color} avatar={<Image src={materialImage} alt={color} width={20} height={20} />} /> 
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
  <Grid item xs={12}>
    <TextField id="name" label="Name" fullWidth inputProps={{ maxLength: 50 }} />
  </Grid>
  <Grid item xs={12}>
    <TextField id="address" label="Address" fullWidth inputProps={{ maxLength: 50 }} />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField id="phone" label="Phone" fullWidth inputProps={{ maxLength: 15 }} />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField id="email" label="Email" fullWidth inputProps={{ maxLength: 50 }} />
  </Grid>
  <Grid item xs={12}>
    <TextField id="details" label="Details" multiline rows={3} fullWidth inputProps={{ maxLength: 100 }} />
  </Grid>
</Grid>
    </Box>
  );
};

export default BuyModal;