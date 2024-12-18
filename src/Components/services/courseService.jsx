import http from "./httpService";
import baseurl from "../../config";
import {handleSuccess} from "../utils/handleSuccess";
import {handleFailure} from "../utils/handleFailure";

const gettoken = () => {
  return sessionStorage.getItem("token");
};

const courseService = () => {
  const token = gettoken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
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
    getallcourse: async ({page, limit}) => {
      const url = `${baseurl}/course/get-all-course?${page}&${limit}`;
      try {
        const response = await http.get(url);
        handleSuccess(response.data, "Course fetched successfully");
        return response.data;
      } catch (error) {
        handleFailure(error);
        throw new Error(
          "An error occurred while fetching the course. Please try again."
        );
      }
    },
    deletecourse: async (id) => {
      const url = `${baseurl}/course/delete-course/${id}`;
      try {
        const response = await http.delete(url, config);
        handleSuccess(response.data, "Course deleted successfully");
        return response.data;
      } catch (error) {
        handleFailure(error);
        throw new Error(
          "An error occurred while deleting the course. Please try again."
        );
      }
    },
  };
};

export default courseService;