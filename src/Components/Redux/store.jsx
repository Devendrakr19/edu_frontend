import { configureStore } from "@reduxjs/toolkit";
import studentauthReducer from "./slices/auth/StudentAuthSlice";
import courseReducer from "./slices/courses/CourseSlice";

export const store = configureStore({
  reducer: {
    loginsignupauth: studentauthReducer,
    coursedata: courseReducer,
  },
});
