import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts : [],
    selectedCategory: "All",
    categoryArr:["All"],
    error: false,
  },
  reducers: {
    productFetchSuccess: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setCategoryArr: (state, action) => {
      state.categoryArr = action.payload;
    },
    productFetchFailure: (state) => {
      state.error = true;
    },
  },
});

export const { productFetchSuccess, productFetchFailure, setSelectedCategory, setFilteredProducts, setCategoryArr } = productSlice.actions;
export const products = (state: RootState) => state?.productRedux?.products;
export const filteredProducts = (state: RootState) => state?.productRedux?.filteredProducts;
export const categoryArr = (state: RootState) => state?.productRedux?.categoryArr;

export default productSlice.reducer;