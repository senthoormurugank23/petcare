import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login1() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then(result => {
        console.log(result);
        if (result.data === 'success') {
          alert('Successfully Signed In');
          navigate(`/catboarding/${username}`);
        } else {
          setErrorMessage('Invalid username or password');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='login-container'>
      <div className='login-bg'></div>
      <div className='login-form'>
        <h1 className='font-monospace m-3'>Login Form</h1>
        {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='username' className='mb-2'><strong>Username</strong></label>
            <input
              type="text"
              placeholder='Enter name'
              name="username"
              autoComplete='off'
              className='form-control rounded-pill border border-2 border-dark'
              required
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='mb-2'><strong>Password</strong></label>
            <input
              type="password"
              placeholder='Enter Password'
              name="password"
              autoComplete='off'
              className='form-control rounded-pill border border-2 border-dark'
              required
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-2 mb-2'>Login</button>
        </form>
        <Link to="/register" className='btn btn-default border border-2 border-success w-100 bg-light rounded-2 mb-2'>
          Register
        </Link>
        <Link to="/boarding" className='btn btn-default border border-2 border-success w-100 bg-light rounded-2'>
          Back
        </Link>
      </div>
    </div>
  );
}

export default Login1;
