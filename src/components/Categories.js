import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseService } from "../network/services/baseService";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const data = await baseService.get("/categories");
      setCategoryList(data);
      console.log(data);
    } catch (error) {
      console.log("Get category error", error);
    }
  };
  return (
    <div className="category">
      {categoryList?.map((category, key) => (
        <div key={key} className="card">
          <div className="card-body">
            <Link to={`/productlist/${category.id}`} className="link">
              <h5 className="card-title">{category.name}</h5>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
