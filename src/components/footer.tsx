import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 'auto' }}> 
      <Grid container alignItems="center" justifyContent="space-between" p={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Tu Empresa
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2">Home</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/customize" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2">Customize</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body2">Terms & Conditions</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;