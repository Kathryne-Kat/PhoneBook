import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function RegisterPage() {
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
            Register Form
          </h1>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
