import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/interceptor";

export const getRecommendation = createAsyncThunk(
  "/Recommendation",
  async (userid) => {
    try {
      const response = await axiosInstance.post(
        `http://localhost:4000/recomendation/api/recommend/65e990f2425461c836e283b2`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("error");
      throw error;
    }
  }
);

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    courseData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecommendation.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRecommendation.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      state.courseData = action.payload.data;
      console.log(state.courseData);
    });
    builder.addCase(getRecommendation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default recommendationSlice.reducer;
