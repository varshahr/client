import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [userRole, setUserRole] = useState(''); // 'user' or 'admin'

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setUserRole(storedRole);
      setLoginStatus(`Already logged in as ${storedRole}`);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'user@music.com' && password === 'user123') {
      setUserRole('user');
      setLoginStatus('✅ Successfully logged in as User');
      localStorage.setItem('userRole', 'user');
    } else if (email === 'admin@music.com' && password === 'admin123') {
      setUserRole('admin');
      setLoginStatus('✅ Successfully logged in as Admin');
      localStorage.setItem('userRole', 'admin');
    } else {
      setLoginStatus('❌ Invalid email or password');
    }
  };

  const handleLogout = () => {
    setUserRole('');
    setLoginStatus('Logged out');
    localStorage.removeItem('userRole');
  };

  return (
    <div className="login-container">
      {userRole ? (
        <div className="login-form">
          <h1>{loginStatus}</h1>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login to Music Vibes</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          {loginStatus && (
            <p style={{ color: loginStatus.includes('Invalid') ? 'red' : '#4caf50' }}>
              {loginStatus}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default Login;
