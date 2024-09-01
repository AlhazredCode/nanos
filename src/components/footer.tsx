import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

// Constantes SVG (reemplaza con tus rutas SVG)
const LogoWhite = "/assets/images/Logo-white.svg"
const PhoneIcon = "/assets/images/phone.svg"; 
const LocationIcon = "/assets/images/gps.svg"; 

const Footer: React.FC = () => {
  return (
    <Box sx={{ mt: 'auto' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8} sx={{ m: 4, p: 4, borderRadius: 4, backgroundColor: '#1a1a1a' }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={LogoWhite} alt="Logo" width={70} height={70} style={{ marginRight: '16px' }} /> 
              <Typography variant="h6" sx={{ color: 'white' }}>
                DISTRIBUTORS
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} container direction="column" alignItems="flex-end" spacing={1}>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={PhoneIcon} alt="Phone" width={24} height={24} style={{ marginRight: '8px' }} />
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={LocationIcon} alt="Location" width={24} height={24} style={{ marginRight: '8px' }} />
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    123 Main Street, Cityville, USA
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;