import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: true,
};

const url =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
