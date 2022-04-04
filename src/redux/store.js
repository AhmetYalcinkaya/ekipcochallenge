import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./FavoriteSlice";
import categoryReducer from "./CategoriesSlice";
import sliderReducer from "./SliderSlice";
import productsByCategoryReducer from "./ProductsByCategorySlice";
import detailReducer from "./DetailSlice";
export default configureStore({
  reducer: {
    favorites: favoriteReducer,
    categories: categoryReducer,
    slider: sliderReducer,
    productsbycategory: productsByCategoryReducer,
    details: detailReducer,
  },
});
