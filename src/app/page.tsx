import styles from './page.module.css';
import Button from '@mui/material/Button'; // Importa el componente Button
import LandingPage from './(simple)/landing/page';

import { Box } from '@mui/material';


export default function Home() {
  return (
        <>
        <LandingPage/>
        <Button variant="contained" color='primary'>Buy</Button>
        </>
  );
}