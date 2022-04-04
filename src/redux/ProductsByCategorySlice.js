import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync = createAsyncThunk(
  "product/getproduct",
  async (id) => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/categories/${id}/products`
    );
    return response.data;
  }
);
export const ProductsByCategorySlice = createSlice({
  name: "productsbycategory",
  initialState: {
    productsList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //GET products
    [getProductsAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    },
    [getProductsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default ProductsByCategorySlice.reducer;
