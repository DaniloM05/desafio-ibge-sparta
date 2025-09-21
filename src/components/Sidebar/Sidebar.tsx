import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/sparta-sidebar-icon.png" alt="Sparta Logo" />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navItem} title="Home">
          <span className="material-symbols-outlined">
            home
          </span>
        </Link>
        <Link to="/sobre" className={styles.navItem} title="Sobre">
          <span className="material-symbols-outlined">
            account_balance
          </span>
        </Link>
        <a href="#" className={styles.navItem} title="Notas">
          <span className="material-symbols-outlined">
            notes
          </span>
        </a>
        <a href="#" className={styles.navItem} title="Artigos">
          <span className="material-symbols-outlined">
            article
          </span>
        </a>
      </nav>
    </aside>
  );
}