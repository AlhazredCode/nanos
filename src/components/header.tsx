import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';

interface HeaderProps {
  showLandingPage: boolean;
  onToggleView: () => void;
}

const Header: React.FC<HeaderProps> = ({ showLandingPage, onToggleView }) => {
  return (
    <Grid container alignItems="center" justifyContent="space-between" p={2}>
      <Grid item xs={12} sm={4}>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </Grid>
      <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button variant="text" color="primary" onClick={onToggleView}>
            {showLandingPage ? 'Customize' : 'Home'}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Buy
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;