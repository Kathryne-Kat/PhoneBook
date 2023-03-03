import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <>
      <section>
        <div>
          <h1
            style={{
              marginTop: '30px',
              textAlign: 'center',
              color: 'rgb(8, 94, 47',
            }}
          >
            Log in
          </h1>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
