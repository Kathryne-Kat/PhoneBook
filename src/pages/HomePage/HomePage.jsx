import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import css from './HomePage.module.css';
import titleImg from 'img/pngwingcom.png';
export default function HomePage() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <section>
      <div className={css.container}>
        <img
          src={titleImg}
          alt=""
          className={css.imgHome}
          // style={{ display: 'block', maxWidth: '300px', marginBlock: '50px' }}
        />
        <div>
          <h1 className={css.title}>PhoneBook</h1>
          <p
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '20px',
            }}
          >
            {' '}
            Welcome to PhoneBook!
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
      </div>
    </section>
  );
}
