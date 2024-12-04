import { Autocomplete, Box, Grid, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import {
  createCourses,
  getCourse,
} from "../../../Redux/slices/courses/CourseSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CourseDetails = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state) => state?.coursedata?.createCoursesLoading
  );

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const fileInputRef = useRef(null);
  const handleFilechange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      formik.setFieldValue("file", selectedFile);
    }
  };

  const HandlechangePaid = (e, newvalue) => {
    formik.setFieldValue("ispaid", newvalue);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Teacher name is required"),
    category: Yup.string().required("Category is required"),
    subcategory: Yup.string().required("Subcategory is required"),
    level: Yup.string().required("Level is required"),
    coursetitle: Yup.string().required("Course title is required"),
    duration: Yup.number()
      .required("Duration is required")
      .positive()
      .integer(),
    ispaid: Yup.string().required("IsPaid is required"),
    file: Yup.mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File too large",
        (value) => !value || value.size <= 5000000
      ) // Max file size 5MB
      .test(
        "fileType",
        "Only jpg and png file type",
        (value) => !value || ["image/jpeg", "image/png"].includes(value.type)
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      subcategory: "",
      level: "",
      coursetitle: "",
      duration: "",
      ispaid: "",
      price: "",
      file: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log("clicked", values);
      const formData = new FormData();

      Object.keys(values).forEach((key) => {
        if (key !== "file") {
          formData.append(key, values[key]);
        }
      });
      if (values.file) {
        formData.append("file", values.file);
        formData.append("filename", values.file.name);
      }
      try {
        dispatch(createCourses(formData)).unwrap();
        toast.success("Course Created Successfully");
        dispatch(getCourse());
        onClose();
        formik.resetForm();
        formik.setFieldValue("file", null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        toast.error("Error creating course");
      }
    },
  });
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box className="flex justify-center items-center h-screen">
          <div className="bg-[white] w-[50%] p-[15px] rounded">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] font-medium">Create Course Folder</h1>
              <span
                className="text-[22px] font-semibold cursor-pointer"
                onClick={onClose}
              >
                X
              </span>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Grid container columnSpacing={1} rowSpacing={1}>
                <Grid item xs={4}>
                  <label htmlFor="name">
                    Teacher name shows on Course{" "}
                    <span className="text-[red]">*</span>
                  </label>
                  <TextField
                    id="name"
                    fullWidth
                    value={formik.values.name || ""}
                    onChange={formik.handleChange}
                    sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                    placeholder="Enter Your Name"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="category">
                    Select Category <span className="text-[red]">*</span>
                  </label>
                  <Autocomplete
                    id="category"
                    disablePortal
                    fullWidth
                    options={["Programming", "Marketing"]}
                    value={formik.values.category || ""}
                    onChange={(e, newvalue) => {
                      formik.setFieldValue("category", newvalue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            height: "41px",
                          },
                        }}
                        placeholder="select category"
                        error={
                          formik.touched.category &&
                          Boolean(formik.errors.category)
                        }
                        helperText={
                          formik.touched.category && formik.errors.category
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="subcategory">
                    Select Sub Category <span className="text-[red]">*</span>
                  </label>
                  <Autocomplete
                    id="subcategory"
                    disablePortal
                    fullWidth
                    options={["web development", "Mobile development"]}
                    value={formik.values.subcategory || ""}
                    onChange={(e, newvalue) => {
                      formik.setFieldValue("subcategory", newvalue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            height: "41px",
                          },
                        }}
                        placeholder="Select sub category"
                        error={
                          formik.touched.subcategory &&
                          Boolean(formik.errors.subcategory)
                        }
                        helperText={
                          formik.touched.subcategory &&
                          formik.errors.subcategory
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="level">
                    Level <span className="text-[red]">*</span>
                  </label>
                  <Autocomplete
                    id="level"
                    disablePortal
                    fullWidth
                    options={["Beginner", "Intermediate", "Advanced"]}
                    value={formik.values.level || ""}
                    onChange={(e, newvalue) => {
                      formik.setFieldValue("level", newvalue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            height: "41px",
                          },
                        }}
                        placeholder="Select course level"
                        error={
                          formik.touched.level && Boolean(formik.errors.level)
                        }
                        helperText={formik.touched.level && formik.errors.level}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="coursetitle">
                    Course title <span className="text-[red]">*</span>
                  </label>
                  <TextField
                    id="coursetitle"
                    fullWidth
                    value={formik.values.coursetitle || ""}
                    onChange={formik.handleChange}
                    sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                    placeholder="Write course title"
                    error={
                      formik.touched.coursetitle &&
                      Boolean(formik.errors.coursetitle)
                    }
                    helperText={
                      formik.touched.coursetitle && formik.errors.coursetitle
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="duration">
                    Duration (in month) <span className="text-[red]">*</span>
                  </label>
                  <TextField
                    id="duration"
                    fullWidth
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                    placeholder="No. of month"
                    error={
                      formik.touched.duration && Boolean(formik.errors.duration)
                    }
                    helperText={
                      formik.touched.duration && formik.errors.duration
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="ispaid">
                    IsPaid <span className="text-[red]">*</span>
                  </label>
                  <Autocomplete
                    id="ispaid"
                    disablePortal
                    fullWidth
                    options={["Free", "Paid"]}
                    value={formik.values.ispaid || ""}
                    onChange={HandlechangePaid}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          style: {
                            height: "41px",
                          },
                        }}
                        placeholder="Select"
                        error={
                          formik.touched.ispaid && Boolean(formik.errors.ispaid)
                        }
                        helperText={
                          formik.touched.ispaid && formik.errors.ispaid
                        }
                      />
                    )}
                  />
                </Grid>

                {formik.values.ispaid === "Paid" && (
                  <Grid item xs={4}>
                    <label htmlFor="price">Price</label>
                    <TextField
                      id="price"
                      fullWidth
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                      placeholder="Enter price"
                      error={
                        formik.touched.price && Boolean(formik.errors.price)
                      }
                      helperText={formik.touched.price && formik.errors.price}
                    />
                  </Grid>
                )}
                <Grid item xs={4}>
                  <label htmlFor="file">
                    Upload image to shows on course
                    <span className="text-[red]">*</span>
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFilechange}
                    className="w-[100%] mt-[7px]"
                  />
                  {formik.touched.file && formik.errors.file && (
                    <div className="text-[#c31212] text-[13px] mt-1">
                      {formik.errors.file}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="comment">
                    Comment <span className="text-[#adadad]">(Optional)</span>
                  </label>
                  <textarea
                    id="comment"
                    rows={3}
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    className="w-[100%] outline-none border-[1px] border-[#a6a5a5] rounded p-[5px]"
                    placeholder="Enter comment"
                  />
                </Grid>
              </Grid>
              <div className="flex gap-[20px] mt-[15px]">
                <button type="submit" className="site_btn">
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="site_btn border_btn"
                  onClick={() => {
                    onClose(), formik.resetForm();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CourseDetails;
