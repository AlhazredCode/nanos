
// next
import NextLink from 'next/link';
import Image from 'next/image';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// assets

const heroImage = '/assets/images/landing/Hero.png';

// ==============================|| LANDING - HEADER PAGE ||============================== //

export default function HeaderPage() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}> {/* Full width & Hidden overflow */}
      <Container maxWidth={false} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Grid container alignItems="center" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}>
          <Grid item xs={12} lg={5} md={6} order={{ xs: 2, lg: 1 }}> {/* Reordenado para pantallas grandes */}
          <Grid container spacing={2} sx={{ pr: 10, [theme.breakpoints.down('md')]: { pr: 0, textAlign: 'center' }, ml: { xs: 0, md: 12 } }}>
  <Grid item xs={12}>
    <motion.div
      initial={{ opacity: 0, translateY: 550 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 30 }}
    >
      <Typography
        variant="h1"
        color="white"
        sx={{
          fontSize: { xs: '1.825rem', sm: '2rem', md: '2.5rem' },
          fontWeight: 700,
          lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 }
        }}
      >
        <span>Keep Your Restaurant </span>
        <Box component="span" sx={{ color: 'primary.main' }}>
  <span>Clean &amp; Organized </span>
</Box> 
      </Typography>
    </motion.div>
  </Grid>
  <Grid item xs={12}>
    <motion.div
      initial={{ opacity: 0, translateY: 550 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
    >
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontSize: { xs: '0.875rem', md: '1rem' },
          fontWeight: 400,
          lineHeight: { xs: 1.4, md: 1.4 }
        }}
      >
        The best solution for your restaurant bag storage needs.
      </Typography>
    </motion.div>
  </Grid>
  <Grid item xs={12} sx={{ my: 3.25 }}>
    <motion.div
      initial={{ opacity: 0, translateY: 550 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
    >
      <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
        <Grid item>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
             onClick={() => window.open(`https://wa.me/13058046310`, '_blank')}
              size="large"
              color="primary"
              variant="contained"
            >
              Contact Sales
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  </Grid>
</Grid>
          </Grid>

          {/* Imagen a la derecha */}
          <Grid item xs={12} lg={7} md={6} order={{ xs: 1, lg: 2 }}>
  <motion.div
    initial={{ opacity: 0, translateX: 550 }}
    animate={{ opacity: 1, translateX: 0 }}
    transition={{ type: 'spring', stiffness: 150, damping: 30 }}
  >
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Image src={heroImage} alt="Hero" layout="fill" objectFit="cover" priority />
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        pointerEvents: 'none', // Para que los eventos del mouse pasen a través
        background: `
          linear-gradient(to right, #121212, transparent 20%),
          linear-gradient(to left, #121212, transparent 20%),
          linear-gradient(to top, #121212, transparent 25%),
          linear-gradient(to bottom, #121212, transparent 5%)
        ` 
      }} />
    </Box>
  </motion.div>
</Grid>
        </Grid>
      </Container>
    </Box>
  );
}