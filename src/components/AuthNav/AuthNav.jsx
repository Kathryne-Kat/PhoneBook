import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/user/operations';
import { selectUser } from 'redux/user/selectors';
import css from './AuthNav.module.css';

function AuthNav() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.container}>
      <ul className={css.authNav} style={{}}>
        <li className={css.link}>
          <NavLink className={css.titleMenu} to={'/contacts'}>
            CONTACTS
          </NavLink>
        </li>
        <li className={css.linkLogOut}>
          <span className={css.name}>Hello, {user.name}!</span>
          <button className={css.btn} type="button" onClick={handleLogout}>
            LOG OUT
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AuthNav;
