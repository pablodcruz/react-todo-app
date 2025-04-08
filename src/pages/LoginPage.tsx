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
        <h2>Welcome to Our Platform!</h2>
        <p>
          Discover the cutting-edge features of our Loan Management System and learn how it can transform your experience.
        </p>
        <ul>
          <li>
            <a href="https://example.com/feature1" target="_blank" rel="noopener noreferrer">
              Modern Application Process
            </a>
          </li>
          <li>
            <a href="https://example.com/feature2" target="_blank" rel="noopener noreferrer">
              Real-Time Notifications
            </a>
          </li>
          <li>
            <a href="https://example.com/feature3" target="_blank" rel="noopener noreferrer">
              Detailed Analytics & Reporting
            </a>
          </li>
        </ul>
        <img 
          src="https://via.placeholder.com/350x150" 
          alt="Creative Visual" 
        />
        {/* Future carousel integration */}
        <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
          <p>Carousel Placeholder: Show rotating testimonials or feature highlights here!</p>
        </div>
      </div>
    </div>
  );
};
