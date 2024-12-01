import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "../../services/profileService";

export const userProfile = createAsyncThunk(
  "profile/userProfile",
  async (_, thunkAPI) => {
    try {
      const response = await profileService().profile();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({   
    name: "profile",
    initialState: {
      profileData: {},
      loading: false
    },
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(userProfile.pending, (state) => {
          state.loading = true;
        })
        .addCase(userProfile.fulfilled, (state, action) => {
          state.profileData = action.payload;
          state.loading = false;
        })
        .addCase(userProfile.rejected, (state, action) => {
          state.loading = false;
        })
    },
  });
  
  export default profileSlice.reducer;
  