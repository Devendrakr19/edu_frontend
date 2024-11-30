import baseurl from "../../config";
import http from "./httpService";


const loginService = {
    login: async (email, password) => {
        const url = `${baseurl}/student/login`;
        const data = { email, password };

        try {
            const response = await http.post(url, data);
            // console.log('Login response data:', response.data); 
            return response.data;            
        }
        catch (error) {
            throw error;
        }
    },

    teacherlogin: async (email, password) => {
        const url = `${baseurl}/teacher/login`;
        const data = { email, password };

        try {
            const response = await http.post(url, data);
            // console.log('Login response data:', response.data); 
            return response.data;            
        }
        catch (error) {
            throw error;
        }
    }
}

export default loginService;