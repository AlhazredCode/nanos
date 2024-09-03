
'use client';
import Image from 'next/image';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

// third party
import { motion } from 'framer-motion';

// assets
const imgfeature1 = '/assets/images/landing/icon1.svg';
const imgfeature2 = '/assets/images/landing/icon2.svg';
const imgfeature3 = '/assets/images/landing/icon3.svg';

// ==============================|| LANDING - ABOUT PAGE ||============================== //

export default function About() {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        {/* Primera Grid: Iconos con título y subtítulo */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={8} alignItems="center" justifyContent="center" sx={{ height: '100%', width: '100%' }}>
            {[
              { image: imgfeature1, title: 'Importation', subtitle: 'Of high quality restaurant supplies' },
              { image: imgfeature2, title: 'Distribution', subtitle: 'To your final destination' },
              { image: imgfeature3, title: 'Promotion', subtitle: 'Through our distribution channels' }
            ].map((feature, index) => (
              <Grid item xs={12} sm={12} md={12} key={index} sx={{ textAlign: 'center' }}> {/* Centrado en mobile */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 30, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* Centrado del contenido */}
                    <Image src={feature.image} alt="feature" width={48} height={48} />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="h5" color="primary">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {feature.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Segunda Grid: Formulario de contacto */}
        <Grid item xs={12} md={6} sx={{ mx: { xs: 2.5, md: 0 } }}> 
  <Box
    sx={{
      p: 4,
      backgroundColor: '#1a1a1a',
      borderRadius: 4, 
      textAlign: 'center', 
      [theme.breakpoints.up('md')]: { 
        textAlign: 'left',
        borderRadius: 4, // Borde redondeado solo en desktop a la derecha
      }
    }}
  >
    <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
      Contact Us
    </Typography>
    <form>
      <TextField label="Name" variant="outlined" fullWidth margin="normal" sx={{ input: { color: 'white' } }} />
      <TextField label="Phone" variant="outlined" fullWidth margin="normal" sx={{ input: { color: 'white' } }} />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" sx={{ input: { color: 'white' } }} />
      <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} sx={{ input: { color: 'white' } }} />
      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
        Send
      </Button>
    </form>
  </Box>
</Grid>
      </Grid>
    </Container>
  );
}