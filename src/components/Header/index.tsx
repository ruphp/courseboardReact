import {Navigation} from '../Navigation';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <strong className={styles.brand}>Courseboard React</strong>
        <Navigation />
      </div>
    </header>
  );
}
