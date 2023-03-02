import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/user/selectors';

export default function HomePage() {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <section>
      <div>
        <h1>PhoneBook</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          quasi ipsam nobis impedit consequuntur maxime ad officiis incidunt
          doloribus necessitatibus? Illum at ducimus porro facilis delectus
          excepturi incidunt vel distinctio.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          {isLogin ? (
            <button type="button">
              <NavLink to={'/contacts'}>CONTACTS</NavLink>
            </button>
          ) : (
            <>
              <button type="button">
                <NavLink to={'/login'}>LOGIN</NavLink>
              </button>
              <button type="button">
                <NavLink to={'/register'}>REGISTER</NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
