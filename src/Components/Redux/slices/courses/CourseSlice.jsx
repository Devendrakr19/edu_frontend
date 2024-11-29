import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "../../../services/courseService";

export const createCourses = createAsyncThunk(
  "course/createCourses",
  async (formData, thunkAPI) => {
    try {
      const response = await courseService().createcourse(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (thunkAPI) => {
    try {
      const response = await courseService().getcourse();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id, thunkAPI) => {
    try {
      const response = await courseService().deletecourse(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const courseSlice = createSlice({   
  name: "course",
  initialState: {
    createCourses: {},
    createCoursesLoading: false,
    getCourse:{},
    getCourseLoading:false
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createCourses.pending, (state) => {
        state.createCoursesLoading = true;
      })
      .addCase(createCourses.fulfilled, (state, action) => {
        state.createCourses = action.payload;
        state.createCoursesLoading = false;
      })
      .addCase(createCourses.rejected, (state, action) => {
        state.createCoursesLoading = false;
      })
      .addCase(getCourse.pending, (state) => {
        state.getCourseLoading = true;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.getCourse = action.payload;
        state.getCourseLoading = false;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.getCourseLoading = false;
      })
  },
});

export default courseSlice.reducer;
