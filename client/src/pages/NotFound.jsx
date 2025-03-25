import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
  return (
    <>
    <section className="d-flex align-items-center min-vh-100  mt-12 bg-light">
      <div className="container d-flex flex-column align-items-center justify-content-center text-center">
        <h2 className="fw-bold display-1">404</h2>
        <p className="fs-4 fw-semibold">Sorry, we couldn't find this page.</p>
        <p className="mt-3 mb-4 text-secondary">
          But don’t worry, you can find plenty of other things on our homepage.
        </p>
        <NavLink to="/" className="btn btn-primary px-4 py-2">
          Back to Homepage
        </NavLink>
      </div>
   
    </section>
    </>
  );
};

export default Notfound;
