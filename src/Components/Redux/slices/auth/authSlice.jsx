import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../services/authService";

export const Signupuser = createAsyncThunk(
  "auth/Signupuser",
  async (formdata, thunkAPI) => {
    try {
      const response = await authService.signup(formdata);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const Loginuser = createAsyncThunk(
  "auth/Loginuser",
  async (formdata, thunkAPI) => {
    try {
      const response = await authService.login(formdata);
      return response;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
// export const loginWithGoogle = createAsyncThunk(
//   "auth/loginWithGoogle",
//   async (token, thunkAPI) => {
//     try {
//       const response = await authService.loginwithgoogle(token);
//       return response;
//     } catch (error) {
//        return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
//     }
//   }
// );
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (refreshToken, thunkAPI) => {
    try {
      const response = await authService.refreshtoken(refreshToken);
      return response;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: sessionStorage.getItem("userName") || null,
      role: sessionStorage.getItem("Role") || null,
    },
    token: sessionStorage.getItem("token") || null,
    loading: false,
    refreshTokenLoading:false
  },
  reducers: {
    logout: (state) => {
      state.user = {};
      (state.token = null), sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("Role");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Signupuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(Signupuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(Signupuser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(Loginuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(Loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        sessionStorage.setItem("userName", action.payload.name);
        sessionStorage.setItem("Role", action.payload.role);
        sessionStorage.setItem("token", action.payload.token);
      })
      .addCase(Loginuser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(refreshToken.pending, (state) => {
        state.refreshTokenLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.refreshTokenLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        sessionStorage.setItem("token", action.payload.token);
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.refreshTokenLoading = false;
      })
      // .addCase(loginWithGoogle.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(loginWithGoogle.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload;
      //   state.token = action.payload.token;
      //   sessionStorage.setItem("userName", action.payload.name);
      //   sessionStorage.setItem("Role", action.payload.role);
      //   sessionStorage.setItem("token", action.payload.token);
      // })
      // .addCase(loginWithGoogle.rejected, (state, action) => {
      //   state.loading = false;
      // })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
