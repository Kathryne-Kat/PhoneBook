import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import book from 'img/pngwingcom.png';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
import { useAuth } from 'hooks/useAuth';

function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navFlex}>
          <div style={{ display: 'flex', gap: 10 }}>
            <img className={css.book} src={book} alt="" />
            <h1 className={css.titleH1}>PhoneBook</h1>
          </div>
          <div className={css.navAll}>
            <NavLink className={css.titleMenu} to={'/'}>
              HOME
            </NavLink>
            {isLoggedIn ? <AuthNav /> : <UserMenu />}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
