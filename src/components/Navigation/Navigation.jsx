import css from './Navigation.module.css';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <nav className={css.header}>
      <NavLink to="/" className={buildCssClasses}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildCssClasses}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
