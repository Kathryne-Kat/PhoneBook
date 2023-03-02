import React from 'react';
import { NavLink } from 'react-router-dom';

function UserMenu() {
  return (
    <ul style={{ display: 'flex', gap: 10 }}>
      <li>
        <NavLink to={'/login'}>LOGIN</NavLink>
      </li>
      <li>
        <NavLink to={'/register'}>REGISTER</NavLink>
      </li>
    </ul>
  );
}

export default UserMenu;
