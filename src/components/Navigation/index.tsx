import {NavLink} from 'react-router-dom';

function getLinkClass(isActive: boolean) {
  return isActive ? 'nav-pill nav-pill-active' : 'nav-pill';
}

export function Navigation() {
  return (
    <nav aria-label="Основная навигация">
      <ul className="nav-list">
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
