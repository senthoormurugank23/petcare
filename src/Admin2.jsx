import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin2() {
  const [petDetails, setPetDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/admin2')
      .then(response => setPetDetails(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (appointmentId) => {
    axios.delete(`http://localhost:3001/admin2/${appointmentId}`)
      .then(() => {
        setPetDetails(prevDetails => prevDetails.filter(pet => pet._id !== appointmentId));
      })
      .catch(error => {
        console.error(error);
        setErrorMessage('Failed to delete appointment');
      });
  };

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Booking Details - Cat Boarding</h2>
      {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
      <table className='table table-bordered'>
        <thead className="table-info">
          <tr>
            <th>User Name</th>
            <th>Pet Name</th>
            <th>Pet Age</th>
            <th>Pet Gender</th>
            <th>Breed</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Total Days</th>
            <th>Total Amount</th>
            <th>Appointment Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {petDetails.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.pet_name}</td>
              <td>{user.pet_age}</td>
              <td>{user.pet_gender}</td>
              <td>{user.Breed}</td>
              <td>{user.from_date}</td>
              <td>{user.to_date}</td>
              <td>{user.No_of_days}</td>
              <td>{user.Amount}</td>
              <td>{user.appointment_no}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a className="btn btn-outline-info mt-3" href="./amain2">Back</a>
      <a className="btn btn-outline-info mt-3" href="./adminhome">Back to Admin Home</a>
    </div>
  );
}

export default Admin2;
