import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <section>
      <div style={{ display: 'block', margin: '0 auto' }}>
        <h1
          style={{
            textAlign: 'center',
            marginTop: '50px',
            color: 'rgb(8, 94, 47',
          }}
        >
          PhoneBook
        </h1>
        <p
          style={{
            textAlign: 'center',
            marginTop: '10px',
            fontSize: '16px',
          }}
        >
          {' '}
          Hi! Welcome, to PhoneBook!
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {isLogin ? (
            <button className={css.btn} type="button">
              <NavLink className={css.btnLink} to={'/contacts'}>
                CONTACTS
              </NavLink>
            </button>
          ) : (
            <>
              <button className={css.btn} type="button">
                <NavLink className={css.btnLink} to={'/login'}>
                  LOGIN
                </NavLink>
              </button>
              <button className={css.btn} type="button">
                <NavLink className={css.btnLink} to={'/register'}>
                  REGISTER
                </NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
