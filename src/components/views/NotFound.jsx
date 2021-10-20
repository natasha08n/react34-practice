import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <p>Sorry, this page doesn't exist.</p>
      <Link to="/dashboard">Go to dashboard</Link>
    </>
  );
}

export { NotFound };
