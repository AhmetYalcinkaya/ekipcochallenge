import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getFavoriteAsync } from "../redux/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.favorites.products);
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    dispatch(getFavoriteAsync());
    setIsFavorite(product.length);
  }, [dispatch, product.length]);

  return (
    <div className=" bg-light">
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <ul className="navbar-nav me-auto  mb-lg-0">
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
              {isFavorite > 0 ? (
                <i className="bi bi-heart-fill"></i>
              ) : (
                <i className="bi bi-heart"></i>
              )}{" "}
              Favorites
            </Link>
          </>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
