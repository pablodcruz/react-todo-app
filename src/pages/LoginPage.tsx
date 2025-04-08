import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../App.css'; 

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login(email, password);
    navigate('/dashboard');
  };

  const handleRegisterNavigate = () => {
    navigate('/register');
  };

  return (
    <div className="auth-container">
      {/* Login Panel */}
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <p className="register-text">
          Don’t have an account?{' '}
          <button onClick={handleRegisterNavigate} className="register-link">
            Register
          </button>
        </p>
      </div>

      {/* Creative Static Information Panel */}
      <div className="info-panel">
        <h2>Welcome to Our Loan Management System!</h2>
        <p>
          Discover exciting features and learn more about how our system can help streamline your loan management process.
        </p>
        <ul>
          <li>
            <a href="https://example.com/feature1" target="_blank" rel="noopener noreferrer">
              Feature 1: Easy Application Process
            </a>
          </li>
          <li>
            <a href="https://example.com/feature2" target="_blank" rel="noopener noreferrer">
              Feature 2: Instant Approval Notifications
            </a>
          </li>
          <li>
            <a href="https://example.com/feature3" target="_blank" rel="noopener noreferrer">
              Feature 3: Comprehensive Loan Analytics
            </a>
          </li>
        </ul>
        <img 
          src="https://via.placeholder.com/350x150" 
          alt="Creative Visual" 
          style={{ width: '100%', borderRadius: '5px', marginBottom: '1rem' }} 
        />
        {/* Placeholder for a Carousel - you can integrate a carousel component/library here */}
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '1rem' }}>
          <p>Carousel Placeholder: Add rotating images or testimonials here!</p>
        </div>
      </div>
    </div>
  );
};
