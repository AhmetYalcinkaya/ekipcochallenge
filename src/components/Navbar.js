import React from "react";
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";

function Navbar() {
  //const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
              to="/"
            >
              Homepage
            </Link>
          </ul>

          <>
            <Link
              to="/favorites"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill "
            >
              <i className="bi bi-heart-fill"></i>
              <i className="bi bi-heart"></i> Favorites
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
