import "./favorites.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFavoriteAsync } from "../../redux/FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.favorites.products);
  const isLoading = useSelector((state) => state.favorites.isLoading);
  const error = useSelector((state) => state.favorites.error);

  useEffect(() => {
    dispatch(getFavoriteAsync());
  }, [dispatch]);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }
  return (
    <div className="cart">
      <div className="cartwrapper">
        <h1 className="carttitle">YOUR FAVORITES</h1>
        <div className="top">
          <Link to="/">
            <button className="topbutton">CONTINUE SHOPPING</button>
          </Link>
        </div>
        <div className="bottom">
          <div className="bottominfo">
            <h2>Your Have No Favorites</h2>

            <div className="products">
              {product.map((favorite, key) => (
                <div key={key} className="card" style={{ width: "18rem" }}>
                  <img
                    src={`${process.env.REACT_APP_API_BASE_ENDPOINT}/${favorite.productImage}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{favorite.name}</h5>

                    <div className="flex">
                      <p className="card-text">{favorite.price} TL</p>
                      <i className="bi bi-heart-fill"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
