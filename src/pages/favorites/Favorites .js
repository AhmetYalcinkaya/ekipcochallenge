import "./favorites.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseService } from "../../network/services/baseService";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getFavorites();
  });

  const getFavorites = async () => {
    try {
      const data = await baseService.get(`/favorites`);

      setFavorites(data);
    } catch (error) {
      console.log("Get favorites error", error);
    }
  };
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
            <h2>Your Cart is Empty</h2>

            <div className="products">
              {favorites.map((favorite, key) => (
                <div key={key} className="card" style={{ width: "18rem" }}>
                  <img
                    src={favorite.productImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{favorite.name}</h5>
                    <p className="card-text">{favorite.price}</p>
                    <div className="addcontainer">
                      <button className="addbutton">ADD TO CART</button>
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
