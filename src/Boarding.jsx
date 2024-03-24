import React from 'react';
import { Link } from 'react-router-dom';
import slide16 from './assets/slide7.jpg';

function Boarding() {
  const backgroundImageUrl = 'slide16.jpg'; 
  const containerStyle = {
    backgroundImage: `url(${slide16})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className='card p-4' style={{ maxWidth: '400px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <div className='text-center'>
          <h1 className='display-4 mb-4'>Boarding</h1>
          <div className='btn-group-vertical' role='group'>
            <Link to='/checklimit' className='btn btn-info mb-2'>Dog Boarding</Link>
            <Link to='/checklimit1' className='btn btn-info mb-2'>Cat Boarding</Link>
            <Link to='/checklimit2' className='btn btn-info mb-2'>Bird Boarding</Link>
            <Link to='/' className='btn btn-outline-dark'>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boarding;
