
import { useNavigate } from 'react-router-dom';
import { login } from '../auth';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
