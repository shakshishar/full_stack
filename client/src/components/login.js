import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the signin data to your backend API
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log('Successfully signed in');
        window.alert('Successfully signed in');
        navigate('/');
        // Redirect the user to the dashboard or another protected route
      } else if (response.status === 401) {
        console.error('Incorrect password');
        window.alert('Incorrect password');
        // Display an error message to the user
      } else if (response.status === 404) {
        console.error('User not found');
        window.alert('User not found');
        // Display an error message to the user
      } else {
        console.error('Signin failed');
        window.alert('Signin failed');
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    <div className='body-container'>
    <div className='signup-container'>
     
      <form onSubmit={handleSubmit} className='form-box'>
      <h2>Signin</h2>
        <div className='input-box'>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-box'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='btn'>
        <button type="submit">Signin</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
