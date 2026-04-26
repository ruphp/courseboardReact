import {NavLink} from 'react-router-dom';
import styles from './navigation.module.css';

function getLinkClass(isActive: boolean) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export function Navigation() {
  return (
    <nav aria-label="Основная навигация">
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={({isActive}) => getLinkClass(isActive)}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({isActive}) => getLinkClass(isActive)}>
            Курсы
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => getLinkClass(isActive)}>
            О проекте
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
