import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/user/operations';

function AuthNav() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <ul style={{ display: 'flex', gap: 10 }}>
      <li>
        <NavLink to={'/contacts'}>CONTACTS</NavLink>
      </li>
      <li style={{ display: 'flex', gap: 10 }}>
        <p>USER MENU</p>{' '}
        <button type="button" onClick={handleLogout}>
          LOG OUT
        </button>
      </li>
    </ul>
  );
}

export default AuthNav;
