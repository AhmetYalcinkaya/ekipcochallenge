import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { baseService } from "../network/services/baseService";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../../redux/CartSlice";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const { id } = useParams();
  //const dispatch = useDispatch();

  useEffect(() => {
    getCategoriesProducts();
  });

  const getCategoriesProducts = async () => {
    try {
      const data = await baseService.get(`/categories/${id}/products`);

      setProductsList(data);
    } catch (error) {
      console.log("Get productsList error", error);
    }
  };

  // const handleClick = (product) => {
  //   dispatch(addProduct({ ...product, quantity: quanty }));
  //   setQuanty(1);
  // };

  return (
    <>
      <div className="products">
        {productsList.map((product, key) => (
          <div key={key} className="card" style={{ width: "18rem" }}>
            <img
              src={product.productImage}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <div className="addcontainer">
                <Link to={`/products/${product.id}`}>
                  <button className="addbutton">Go to Detail</button>
                </Link>

                <button className="addbutton">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
