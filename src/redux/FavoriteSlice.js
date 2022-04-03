import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFavoriteAsync = createAsyncThunk(
  "favorite/getFavorite",
  async () => {
    const response = await fetch("http://localhost:3000/favorites");
    return await response.json();
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
    addFavorite: (state, action) => {
      state.products = action.payload;
    },
    removeFavorite: (state, action) => {
      const product = action.payload;
      const filtered = state.products.filter((item) => item.id !== product.id);
      state.products = filtered;
    },
  },
  extraReducers: {
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
  },
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
