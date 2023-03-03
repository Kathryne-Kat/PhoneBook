import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Navbar from 'components/Navbar/Navbar';

export const Layout = () => {
  return (
    <div className={css.wrapAll}>
      <Navbar />
      <main className={css.container}>
        <Outlet />
      </main>
    </div>
  );
};
