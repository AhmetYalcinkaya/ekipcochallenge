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
  async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/favorites`,
      data
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
  reducers: {},
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
      state.products.push(action.payload);
    },
    [removeFavoriteAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default FavoriteSlice.reducer;
