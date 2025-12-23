import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="contianer">
      <div className="row text-center p-5 m-5">
        <h1>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
