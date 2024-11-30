import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/authService";

export const Signup = createAsyncThunk(
  "auth/signup",
  async (formdata, thunkAPI) => {
    try {
      const response = await authService().signup(formdata);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(Signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(Signup.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
