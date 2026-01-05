import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensures your styles are loaded

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page reload

    // Your original credentials logic
    const correctUsername = "mia";
    const correctPassword = "iloveyou";

    if (username === correctUsername && password === correctPassword) {
      navigate('/home'); // Redirects to the main dashboard
    } else {
      alert("Wrong credentials!");
    }
  };

  return (
    <div className="login-body"> {/* We'll use this class to scope the login background */}
      <div className="brand">For Her</div>
      <div className="container">
        <div className="login-card">
          <div className="login-header">
            <h2 className="login-title">Log in</h2>
          </div>

          <form onSubmit={handleLogin}>
            {/* Username */}
            <div className="form-group">
              <div className="input-icon">👤</div>
              <input
                type="text"
                className="form-input"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="input-icon">🔒</div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div 
                className="password-toggle" 
                onClick={() => setShowPassword(!showPassword)}
                style={{cursor: 'pointer'}}
              >
                {showPassword ? "🙈" : "👁️"}
              </div>
            </div>

            {/* Checkbox */}
            <div className="form-options">
              <div className="checkbox-container">
                <input type="checkbox" id="rememberMe" required />
                <label htmlFor="rememberMe" style={{marginLeft: '8px'}}>DO YOU LOVE ME?</label>
              </div>
            </div>

            <button type="submit" className="login-btn">LOG IN</button>
          </form>
        </div>
      </div>
      <div className="welcome-text">WELCOME, BABY!</div>
    </div>
  );
};

export default Login;