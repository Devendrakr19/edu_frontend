import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../../../services/loginService";
import signupService from "../../../services/signupService";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginService.login(email, password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async ({ name, email, mobile, password }, thunkAPI) => {
    try {
      const response = await signupService.signup(
        name,
        email,
        mobile,
        password
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const teacherLogin = createAsyncThunk(
  "auth/teacherLogin",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginService.teacherlogin(email, password);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const teacherSignup = createAsyncThunk(
  "auth/teacherSignup",
  async ({ name, email, mobile, password }, thunkAPI) => {
    try {
      const response = await signupService.teachersignup(
        name,
        email,
        mobile,
        password
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name:localStorage.getItem("userName") || ""
    },
    token: localStorage.getItem("token"),
    loading: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("userName", action.payload.user.name);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
      })
      // Teacher Login
      .addCase(teacherLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(teacherLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("userName", action.payload.user.name);
      })
      .addCase(teacherLogin.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
