import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSliderAsync = createAsyncThunk("slide/getslide", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/sliders`
  );
  return response.data;
});
export const SliderSlice = createSlice({
  name: "slider",
  initialState: {
    slide: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //GET slide
    [getSliderAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [getSliderAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.slide = action.payload;
    },
    [getSliderAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default SliderSlice.reducer;
