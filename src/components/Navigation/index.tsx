import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css';

export function Navigation() {
  return (
    <nav aria-label="Основная навигация">
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({isActive}) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
            Курсы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({isActive}) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
            О проекте
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
