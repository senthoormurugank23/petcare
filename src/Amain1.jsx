import React from 'react';
import { Link } from 'react-router-dom';
import slide from './assets/slide4.jpg';

function Amain1() {
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
            <h1 className='display-4 mb-4'>Cat Details</h1>
            <div className='btn-group-vertical' role='group'>
              <Link to='/admin2' className='btn btn-outline-info mb-2'>View Records</Link>
              <Link to='/view2' className='btn btn-outline-info mb-2'>Payment Report</Link>
              <Link to='/adminhome' className='btn btn-outline-dark'>Back</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amain1;
