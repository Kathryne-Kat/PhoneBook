import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import book from 'img/pngwingcom.png';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
// style={{ display: 'flex', gap: 10 }}
export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.wrapAll}>
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
      <main className={css.container}>
        <Outlet />
      </main>
    </div>
  );
};

// export default Layout
