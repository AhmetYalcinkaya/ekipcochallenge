import { useEffect, useState } from "react";
import "./productDetail.scss";
import { useParams } from "react-router-dom";
import { baseService } from "../../network/services/baseService";
//import { useDispatch } from "react-redux";
//import { addProduct } from "../../redux/CartSlice";

const Detail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // const dispatch = useDispatch();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const data = await baseService.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log("Get detail error", error);
    }
  };

  // const handleClick = () => {
  //   dispatch(addProduct({ ...product, quantity }));
  // };

  return (
    <>
      <div className="productspage">
        <div className="productwrapper">
          <div className="productimage">
            <img className="proimg" src={product.image} alt="" />
          </div>
          <div className="productinfo">
            <h1 className="protitle">{product.name}</h1>
            <p className="prodesc">{product.description}</p>
            <span className="prize">{product.price} $</span>
            <div className="addcontainer">
              <button className="addbutton">
                <i className="bi bi-heart-fill"></i>
                <i className="bi bi-heart"></i>Add To Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
