import http from "./httpservice";
import baseurl from "../../config";

const signupService = {
  signup: async (name, email, mobile, password) => {
    const url = `${baseurl}/student/signup`;
    const data = { name, email, mobile, password };

    try {
      const response = await http.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  teachersignup: async (name, email, mobile, password) => {
    const url = `${baseurl}/teacher/signup`;
    const data = { name, email, mobile, password };

    try {
      const response = await http.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default signupService;
