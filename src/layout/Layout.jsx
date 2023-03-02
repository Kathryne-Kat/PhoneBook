import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import book from 'img/pngwingcom.png';
// style={{ display: 'flex', gap: 10 }}
export const Layout = () => {
  return (
    <div className={css.wrapAll}>
      <header className={css.header}>
        <div className={css.nav}>
          <nav style={{ display: 'flex', gap: 10 }}>
            <img className={css.book} src={book} alt="" />
            <h1 className={css.titleH1}>PhoneBook</h1>
            <ul style={{ display: 'flex', gap: 10 }}>
              <li>
                <NavLink to={'/'}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={'/login'}>LOGIN</NavLink>
              </li>
              <li>
                <NavLink to={'/register'}>REGISTER</NavLink>
              </li>
              <li>
                <NavLink to={'/contacts'}>CONTACTS</NavLink>
              </li>
            </ul>
          </nav>
          <div>
            USER MENU <button type="button">LOG OUT</button>
          </div>
        </div>
        <></>
      </header>
      <main className={css.container}>
        <Outlet />
      </main>
    </div>
  );
};

// export default Layout
