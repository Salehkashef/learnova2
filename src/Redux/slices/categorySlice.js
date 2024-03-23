import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Axios/interceptor";

export const getCategory = createAsyncThunk(
  "category/getcategory",
  async () => {
    let response = await axiosInstance.get(
      "http://localhost:4000/category/all"
    );
    console.log(response.data);
    return response.data;
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    flag: false,
    loading: true,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state, action) => {
        console.log("pinding");
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategory.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});
export default categorySlice.reducer;
