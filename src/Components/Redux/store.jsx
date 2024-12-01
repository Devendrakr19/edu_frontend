import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import courseReducer from "./slices/courses/CourseSlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    coursedata: courseReducer,
    profileList: profileReducer,
  },
});
