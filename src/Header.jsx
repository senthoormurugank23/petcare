import React from 'react';

function Header() {
  return (
    <div className='bg-dark p-3 border border-info'>
      <div className='text-light text-center bg-dark p-2 mb-3 border-5 border-info'>
        <h1>Veterinary And PetcareHub</h1>
      </div>
      <nav className="navbar navbar-expand-lg bg-dark p-3 border border-info">
        <div className="container-fluid">
          <a className="btn btn-outline-info m-2" href="./">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="btn btn-outline-info m-2" href="./register">Register</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-info m-2" href="./admin">Admin</a>
              </li> 
              <li className="nav-item">
                <a className="btn btn-outline-info m-2" aria-current="page" href="./boarding">Boarding</a>
              </li><br/>
              <li className="nav-item">
                <a className="btn btn-outline-info m-2" href="./about">About</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
