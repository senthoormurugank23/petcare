import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 7) {
      alert('Username must be at least 7 characters long.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhoneNumber(phone_number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (password.length < 7) {
      alert('Password must be at least 7 characters long.');
      return;
    }

    axios.post('http://localhost:3001/register', { username, email, phone_number, password })
      .then((result) => {
        console.log(result);
        alert('Successfully Registered');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Registration failed. Please try again.');
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  return (
    <>
      <div className='signup-container'>
        <div className='signup-bg'></div>
        <div className='signup-form'>
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
            <div className='mb-3'>
              <label htmlFor='username'><strong>Username</strong></label>
              <input
                type='text'
                placeholder='Enter name'
                name='username'
                autoComplete='off'
                className='form-control rounded-pill border border-2 border-dark'
                required
                minLength='7'
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input
                type='email'
                placeholder='Enter email ID'
                name='email'
                autoComplete='off'
                className='form-control rounded-pill border border-2 border-dark'
                required
                pattern='[^\s@]+@[^\s@]+\.[^\s@]+'
                title='Please enter a valid email address.'
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='phone_number'><strong>Phone Number</strong></label>
              <input
                type='tel'
                placeholder='Enter Phone Number'
                name='phone_number'
                autoComplete='off'
                className='form-control rounded-pill border border-2 border-dark'
                required
                pattern='\d{10}'
                title='Please enter a valid 10-digit phone number.'
                onChange={(e) => setphone_number(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input
                type='password'
                placeholder='Enter Password'
                name='password'
                autoComplete='off'
                className='form-control rounded-pill border border-2 border-dark'
                required
                minLength='7'
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-2 mb-2'>Register</button>
          </form>
          <a className='btn btn-outline-info w-100 m-2' href='./'>Back</a>
        </div>
      </div>
    </>
  );
}

export default Signup;
