import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import slide6 from './assets/slide6.jpg';
import html2pdf from 'html2pdf.js';

function Success() {
  const { appointmentNo, from_date: fromDateParam } = useParams();
  const successRef = useRef(null);
  const [from_date, setFromDate] = useState(fromDateParam);

  useEffect(() => {
    setFromDate(fromDateParam);
  }, [fromDateParam]);

  const downloadAsPDF = () => {
    const input = successRef.current;

    if (input) {
      html2pdf(input);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card p-3' ref={successRef}>
            <h1 className='text-center mb-4'>Invoice</h1>
            <h2 className='text-center mb-4'>Veterinary and Petcarehub</h2>
            <h1 className='text-center mb-4'>Appointment Booked Successfully!</h1>
            <h3 className='text-center mb-3'>Your Appointment Number: {appointmentNo}</h3>
            <h3 className='text-center mb-3'>Date: {from_date} Morning</h3>
            <div className='d-grid gap-2'>
              <button className='btn btn-primary' onClick={downloadAsPDF}>
                Download as PDF
              </button>
              <Link to="/" className='btn btn-secondary'>
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <img className='img-fluid rounded' alt="" src={slide6} />
        </div>
      </div>
    </div>
  );
}

export default Success;
