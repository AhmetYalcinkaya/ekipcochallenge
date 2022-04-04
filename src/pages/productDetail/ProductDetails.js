import { useEffect } from "react";
import "./productDetail.scss";
import { useParams } from "react-router-dom";
import { getDetailAsync } from "../../redux/DetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteAsync } from "../../redux/FavoriteSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details.detail);
  const isLoading = useSelector((state) => state.details.isLoading);
  const error = useSelector((state) => state.details.error);

  useEffect(() => {
    dispatch(getDetailAsync(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  const handleClick = async () => {
    await dispatch(addFavoriteAsync({ ...detail, isFavorite: true }));
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
            <span className="prize">{detail.price} $</span>
            <div className="addcontainer">
              <button className="addbutton" onClick={handleClick}>
                {detail.isFavorite === true ? (
                  <>
                    <i className="bi bi-heart-fill"></i> Already in Favorites
                  </>
                ) : (
                  <>
                    <i className="bi bi-heart"></i> Add To Favorites
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
