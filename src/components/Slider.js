import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { baseService } from "../network/services/baseService";
import { Link } from "react-router-dom";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders();
  });

  const getSliders = async () => {
    try {
      const data = await baseService.get(`/sliders`);

      setSliders(data);
    } catch (error) {
      console.log("Get sliders error", error);
    }
  };
  return (
    <div>
      <Carousel>
        {sliders.map((slider) => (
          <Carousel.Item key={slider.productId}>
            <Link to={`/products/${slider.productId}`}>
              <img
                className="d-block w-100"
                src="https://media.wired.com/photos/606ce52941bf976945513469/191:100/w_2086,h_1092,c_limit/Gear-Cloudburst-Jacket---Mandarin-Front-square-grey-back.jpg"
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
