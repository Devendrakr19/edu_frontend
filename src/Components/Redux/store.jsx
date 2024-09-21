import { configureStore } from "@reduxjs/toolkit";
import studentauthReducer from "./slices/auth/StudentAuthSlice";

export const store = configureStore({
  reducer: {
    loginsignupauth: studentauthReducer,
  },
});
