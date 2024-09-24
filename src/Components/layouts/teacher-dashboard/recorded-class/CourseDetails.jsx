import { Autocomplete, Box, Grid, Modal, TextField } from "@mui/material";
import React from "react";

const CourseDetails = ({ open, onClose }) => {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box className="flex justify-center items-center h-screen">
          <div className="bg-[white] w-[50%] p-[15px] rounded">
            <div className="flex justify-between items-center">
              <h1 className="text-[16px] font-medium">Create Course Folder</h1>
              <span className="text-[22px] font-semibold cursor-pointer" onClick={onClose}>X</span>
            </div>
            <Grid container columnSpacing={1} rowSpacing={1}>
              <Grid item xs={4}>
                <label htmlFor="name">
                  Name show on Course <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="name"
                  fullWidth
                  sx={{ "& .MuiInputBase-input": { padding: "9px" } }}
                  placeholder="Name will show on course"
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
            </Grid>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CourseDetails;
