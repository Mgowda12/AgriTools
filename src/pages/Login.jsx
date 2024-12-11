import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      <div className="bg-white p-8 rounded-lg shadow">
        <LoginForm />
      </div>
    </div>
  );
}