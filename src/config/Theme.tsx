'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // Cambia este color por tu color primario
    },
    secondary: {
      main: '#6c757d', // Cambia este color por tu color secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Cambia la fuente si lo deseas
  },
});

export default theme;