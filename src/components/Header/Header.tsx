import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const routeNames: { [key: string]: string } = {
  '/': 'Home',
  '/sobre': 'Sobre',
};

export function Header() {
  const location = useLocation();

  const pageName = routeNames[location.pathname] || 'Página';

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb}>{pageName}</div>
      <h1>This is SPARTA!</h1>
    </header>
  );
}