import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide13 from './assets/slide13.jpg';

const Avail = () => {
  const [isLimitFull, setIsLimitFull] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/checkLimit')
      .then((response) => response.json())
      .then((data) => {
        setIsLimitFull(data.isLimitFull);
      })
      .catch((error) => console.error('Error checking limit from React', error));
  }, []);

  return (
    <div
      className='container-fluid d-flex justify-content-center align-items-center vh-100'
      style={{
        backgroundImage: `url(${slide13})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff', 
      }}>
      <div
        className='text-center'>
        <h1 className='mb-5'>Welcome To Dog Boarding</h1>
        {isLimitFull ? (
          <div>
            <h2 className='text-danger'>Sorry, Dog Boarding is currently full. Please check back later.</h2>
          </div>
        ) : (
          <div>
            <h2 className='mb-5 text-light'>Dog Boarding is currently available!</h2>
            <Link to="/login" className='btn btn-primary w-50 rounded-5 text-decoration-none mb-2'>
              <h4>Continue...</h4>
            </Link>
          </div>
        )}
        <Link to="/boarding" className='btn btn-secondary w-50 rounded-5 text-decoration-none'>
          <h4>...Back</h4>
        </Link>
      </div>
    </div>
  );
};

export default Avail;
