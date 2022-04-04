import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavoriteAsync = createAsyncThunk(
  "favorite/getFavorite",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/favorites`
    );
    return response.data;
  }
);
export const addFavoriteAsync = createAsyncThunk(
  "favorite/addFavorite",
  async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/favorites`,
      data
    );
    return response.data;
  }
);
export const removeFavoriteAsync = createAsyncThunk(
  "favorite/removeFavorite",
  async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/favorites/${id}`
    );
    return response.data;
  }
);

export const FavoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    removeFavorite: (state, action) => {
      const product = action.payload;
      const filtered = state.products.filter((item) => item.id !== product.id);
      state.products = filtered;
    },
  },
  extraReducers: {
    //GET FAVORITE
    [getFavoriteAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getFavoriteAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getFavoriteAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //ADD FAVORITE

    [addFavoriteAsync.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
    [addFavoriteAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    //REMOVE FAVORITE
    [removeFavoriteAsync.fulfilled]: (state, action) => {
      const product = action.payload;
      const filtered = state.products.filter((item) => item.id !== product.id);
      state.products = filtered;
    },
  },
});

export const { removeFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
