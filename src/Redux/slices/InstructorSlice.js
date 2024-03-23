import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/interceptor";
export const getInstructorData = createAsyncThunk(
  "instructor/getData",
  async (userID, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:4000/user/instructor/${userID}`
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    userData: {},
    instructor: {},
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getInstructorData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getInstructorData.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);

      state.instructor = action.payload.Instructor;
      state.userData = action.payload.UserData;
    });
    builder.addCase(getInstructorData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default instructorSlice.reducer;
