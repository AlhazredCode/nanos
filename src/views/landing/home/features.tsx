import Image from 'next/image';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // Import Box

// project import

// assets
const imgfeature1 = '/assets/images/landing/img-feature1.svg';
const imgfeature2 = '/assets/images/landing/img-feature2.svg';
const imgfeature3 = '/assets/images/landing/img-feature3.svg';

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function Features() {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
      <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3 }}> {/* Replaced MainCard with Box */}
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Image src={imgfeature1} alt="feature" width={48} height={48} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    Products
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary">
                    Manage your bar's products with ease. Add, edit, and track all your offerings. 
                  </Typography>
                </Grid>
              </Grid>
            </Box> {/* Replaced MainCard with Box */}
        </Grid>

        {/* Bottle Database */}
        <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3 }}> {/* Replaced MainCard with Box */}
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Image src={imgfeature2} alt="feature" width={48} height={48} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    Bottle Database
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary">
                    Instantly access 10,000+ bottles. Quickly add spirits, wines, beers, and more. 
                  </Typography>
                </Grid>
              </Grid>
            </Box> {/* Replaced MainCard with Box */}
        </Grid>

        {/* ... Rest of the code with MainCard replaced by Box ... */}

      </Grid>
    </Container>
  );
}