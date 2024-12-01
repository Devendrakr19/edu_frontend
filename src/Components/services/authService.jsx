import http from "./httpService";
import baseurl from "../../config";

const authService = {
  signup: async (formdata) => {
    const url = `${baseurl}/user/signup`;
    try {
      const response = await http.post(url, formdata);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (formdata) => {
    const url = `${baseurl}/user/login`;
    try {
      const response = await http.post(url, formdata);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;