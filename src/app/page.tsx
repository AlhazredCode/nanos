import Image from 'next/image';
import styles from './page.module.css';
import Button from '@mui/material/Button'; // Importa el componente Button

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant="contained" color="primary">
        Hola, Material UI!
      </Button>
    </main>
  );
}