import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsAsync } from "../redux/ProductsByCategorySlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector(
    (state) => state.productsbycategory.productsList
  );
  const isLoading = useSelector((state) => state.productsbycategory.isLoading);
  const error = useSelector((state) => state.productsbycategory.error);

  useEffect(() => {
    dispatch(getProductsAsync(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  return (
    <>
      <div className="products">
        {productsList.map((product, key) => (
          <div key={key} className="card" style={{ width: "18rem" }}>
            <img
              src={`${process.env.REACT_APP_API_BASE_ENDPOINT}/${product.productImage}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price} TL</p>

              <Link to={`/products/${product.id}`}>
                <button className="addbutton">Go to Detail</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
