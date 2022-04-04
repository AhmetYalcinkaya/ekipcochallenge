import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategoryAsync } from "../redux/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.category);
  const isLoading = useSelector((state) => state.categories.isLoading);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, [dispatch]);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }
  return (
    <div className="category">
      {category.map((item, key) => (
        <div key={key} className="card">
          <div className="card-body">
            <Link to={`/productlist/${item.id}`} className="link">
              <h5 className="card-title">{item.name}</h5>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
