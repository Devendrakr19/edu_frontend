import http from "./httpservice";
import baseurl from "../../config";
import {handleSuccess} from "../utils/handleSuccess";
import {handleFailure} from "../utils/handleFailure";

const gettoken = () => {
  return localStorage.getItem("token");
};

const courseService = () => {
  const token = gettoken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    // withCredentials: true,
  };

  return {
    createcourse: async (formData) => {
      const url = `${baseurl}/course/create-course`;
      try {
        const response = await http.post(url, formData, config);
        handleSuccess(response.data, "Course created successfully");
        return response.data;
      } catch (error) {
        handleFailure(error);
        throw new Error(
          "An error occurred while creating the coursee. Please try again."
        );
      }
    },
    getcourse: async () => {
      const url = `${baseurl}/course/get-course`;
      try {
        const response = await http.get(url, config);
        handleSuccess(response.data, "Course fetched successfully");
        return response.data;
      } catch (error) {
        handleFailure(error);
        throw new Error(
          "An error occurred while fetching the course. Please try again."
        );
      }
    },
  };
};

export default courseService;