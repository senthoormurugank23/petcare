import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View3 = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/view3')
      .then(response => {
        setTotalAmount(response.data.totalAmount);
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Failed to fetch payment details');
      });
  }, []);

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Total Amount - Bird Boarding</h2>
      {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Total Amount</h5>
          <p className="card-text">{totalAmount !== undefined ? `Rs ${totalAmount.toFixed(2)}` : 'Loading...'}</p>
        </div>
      </div>
      <div className="mt-3">
        <a className="btn btn-outline-info" href="./amain2">Back</a>
        <a className="btn btn-outline-info ml-3" href="./adminhome">Back to Admin Home</a>
      </div>
    </div>
  );
}

export default View3;
