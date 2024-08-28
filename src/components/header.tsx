import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-between" p={2} >
      <Grid item xs={12} sm={4}>
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </Grid>
      <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </Grid>
        <Grid item>
          <Link href="/customize" style={{ textDecoration: 'none', color: 'inherit' }}>
            Customize
          </Link>
        </Grid>
        <Grid item>
          <Button variant="contained" color='primary'>Buy</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;