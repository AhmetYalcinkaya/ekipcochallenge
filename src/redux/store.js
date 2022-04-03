import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./FavoriteSlice";

export default configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});
