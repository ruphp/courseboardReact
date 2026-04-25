import {NavLink} from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Курсы</NavLink>
        </li>
        <li>
          <NavLink to="/about">О проекте</NavLink>
        </li>
      </ul>
    </nav>
  );
}

