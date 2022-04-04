import { useEffect, useState } from "react";
import "./productDetail.scss";
import { useParams } from "react-router-dom";
import { getDetailAsync } from "../../redux/DetailSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteAsync,
  removeFavoriteAsync,
} from "../../redux/FavoriteSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details.detail);
  const isLoading = useSelector((state) => state.details.isLoading);
  const error = useSelector((state) => state.details.error);
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    dispatch(getDetailAsync(id));
    setIsFavorite(detail.isFavorite);
  }, [dispatch, id, detail.isFavorite]);
  //loading ve error componenti oluşturup spinner ve error mesajının görünmesini sağlayabiliriz projeyi geliştirmek istersek.
  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  const handleClick = async () => {
    await dispatch(
      addFavoriteAsync({ ...detail, isFavorite: true, productId: id }),
      setIsFavorite(true)
    );
  };
  const removeHandler = async () => {
    await dispatch(
      removeFavoriteAsync({ ...detail, isFavorite: false, productId: id }),
      setIsFavorite(false)
    );
  };

  return (
    <>
      <div className="productspage">
        <div className="productwrapper">
          <div className="productimage">
            <img
              className="proimg"
              src={`${process.env.REACT_APP_API_BASE_ENDPOINT}/${detail.productImage}`}
              alt=""
            />
          </div>
          <div className="productinfo">
            <h1 className="protitle">{detail.name}</h1>
            <p className="prodesc">{detail.description}</p>
            <span className="prize">{detail.price} TL</span>
            <div className="addcontainer">
              {isFavorite === true ? (
                <button className="addbutton" onClick={removeHandler}>
                  <i className="bi bi-heart-fill"></i> Remove from Favorites
                </button>
              ) : (
                <button className="addbutton" onClick={handleClick}>
                  <i className="bi bi-heart"></i> Add To Favorites
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
