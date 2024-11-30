import http from "./httpservice";
import baseurl from "../../config";

const authService = {
  signup: async (formdata) => {
    const url = `${baseurl}/auth/signup`;
    try {
      const response = await http.post(url, formdata);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (formdata) => {
    const url = `${baseurl}/auth/login`;
    try {
      const response = await http.post(url, formdata);
      // console.log('Login response data:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;