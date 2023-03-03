import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

function UserMenu() {
  return (
    <ul style={{ display: 'flex', gap: 10 }}>
      <li className={css.link}>
        <NavLink className={css.titleMenu} to={'/login'}>
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink className={css.titleMenu} to={'/register'}>
          REGISTER
        </NavLink>
      </li>
    </ul>
  );
}

export default UserMenu;
