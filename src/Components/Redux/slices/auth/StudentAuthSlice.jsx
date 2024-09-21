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
    user: null,
    teacherdata: null,
    token: localStorage.getItem("token"),
    loading: false,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.teacherdata = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Teacher Login
      .addCase(teacherLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(teacherLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherdata = action.payload.teacherdata;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(teacherLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(teacherSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(teacherSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.teacherdata = action.payload.teacherdata;
      })
      .addCase(teacherSignup.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
