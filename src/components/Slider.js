import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getSliderAsync } from "../redux/SliderSlice";
import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();
  const slide = useSelector((state) => state.slider.slide);
  const isLoading = useSelector((state) => state.slider.isLoading);
  const error = useSelector((state) => state.slider.error);

  useEffect(() => {
    dispatch(getSliderAsync());
  }, [dispatch]);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }
  return (
    <div>
      <Carousel>
        {slide.map((item) => (
          <Carousel.Item key={item.productId}>
            <Link to={`/products/${item.productId}`}>
              <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_API_BASE_ENDPOINT}/${item.image}`}
                alt="Third slide"
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
