import Image from 'next/image';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // Import Box
import { Stack } from '@mui/material';

// project import

// assets
const imgfeature1 = '/assets/images/landing/feature1.svg';
const imgfeature2 = '/assets/images/landing/feature2.svg';
const imgfeature3 = '/assets/images/landing/feature3.svg';

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function Features() {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
      <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3 }}> {/* Replaced MainCard with Box */}
              <Stack  spacing={1} direction='row'>
                <Grid item xs={12}>
                  <Image src={imgfeature1} alt="feature" width={48} height={48} />
                </Grid>
              
                <Grid item xs={12}>
                  <Typography variant="h5"  color="primary">
                  Enhance 
                  the Ambiance.
                  </Typography>
                </Grid>
              </Stack>
            </Box> {/* Replaced MainCard with Box */}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3 }}> {/* Replaced MainCard with Box */}
            <Stack  spacing={1} direction='row'>
                <Grid item xs={12}>
                  <Image src={imgfeature2} alt="feature" width={48} height={48} />
                </Grid>
              
                <Grid item xs={12}>
                  <Typography variant="h5"  color="primary">
                  Timeless
                  design
                  </Typography>
                </Grid>
              </Stack>
            </Box> {/* Replaced MainCard with Box */}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ p: 3 }}> {/* Replaced MainCard with Box */}
            <Stack  spacing={1} direction='row'>
                <Grid item xs={12}>
                  <Image src={imgfeature3} alt="feature" width={48} height={48} />
                </Grid>
              
                <Grid item xs={12}>
                  <Typography variant="h5" color="primary">
                  Thoughtful 
                  Hospitality.
                  </Typography>
                </Grid>
              </Stack>
            </Box> {/* Replaced MainCard with Box */}
        </Grid>



      </Grid>
    </Container>
  );
}