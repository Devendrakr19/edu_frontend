import { Autocomplete, Box, Grid, Modal, TextField } from "@mui/material";
import React from "react";

const CourseDetails = ({ open, onClose }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box className="flex justify-center items-center h-screen">
          <div className="bg-[white] w-[50%] p-[15px] rounded">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] font-medium">Create Course Folder</h1>
              <span className="text-[22px] font-semibold cursor-pointer" onClick={onClose}>X</span>
            </div>
            <Grid container columnSpacing={1} rowSpacing={1}>
              <Grid item xs={4}>
                <label htmlFor="name">
                  Teacher name shows on Course <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="name"
                  fullWidth
                  sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                  placeholder="Enter Your Name"
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
                  options={["top100Films", "dev"]}
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
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="subCategory">
                  Select Sub Category <span className="text-[red]">*</span>
                </label>
                <Autocomplete
                  id="subCategory"
                  disablePortal
                  fullWidth
                  options={["top100Films", "dev"]}
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
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="title">
                  Course title <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="title"
                  fullWidth
                  sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                  placeholder="Write course title"
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
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="price">
                  Price <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="price"
                  fullWidth
                  sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                  placeholder="Enter price"
                />
              </Grid>
              <Grid item xs={4}>
                 <label htmlFor="file">Upload image to shows on course<span className="text-[red]">*</span></label>
                 <input type="file" className="w-[100%] mt-[7px]"/>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="comment">
                  Comment <span className="text-[#adadad]">(Optional)</span>
                </label>
                <textarea
                  id="price"
                  rows={3}
                  className="w-[100%] outline-none border-[1px] border-[#a6a5a5] rounded p-[5px]"
                  placeholder="Enter price"
                />
              </Grid>
            </Grid>
            <div className="flex gap-[20px] mt-[15px]">
              <button className="site_btn">Save</button>
              <button className="site_btn border_btn" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CourseDetails;
