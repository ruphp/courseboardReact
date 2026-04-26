import {NavLink} from 'react-router-dom';
import './navigation.css';

export function Navigation() {
  return (
    <nav aria-label="Основная навигация">
      <ul className="list">
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'link active' : 'link')}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({isActive}) => (isActive ? 'link active' : 'link')}>
            Курсы
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? 'link active' : 'link')}>
            О проекте
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
