import React from 'react';
import { Link } from 'react-router-dom';
import slide from './assets/slide4.jpg';

function Adminhome() {
  const containerStyle = {
    backgroundImage: `url(${slide})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className='container mt-5'>
        <div className='card p-4 mx-auto' style={{ maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className='text-center'>
            <h1 className='display-4 mb-4'>View Appointment Details</h1>
            <div className='btn-group-vertical' role='group'>
              <Link to='/amain' className='btn btn-outline-info mb-2'>Dog Boarding</Link>
              <Link to='/amain1' className='btn btn-outline-info mb-2'>Cat Boarding</Link>
              <Link to='/amain2' className='btn btn-outline-info mb-2'>Bird Boarding</Link>
              <Link to='/admin' className='btn btn-outline-dark'>Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
