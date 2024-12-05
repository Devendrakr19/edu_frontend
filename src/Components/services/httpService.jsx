import axios from "axios";
import baseurl from "../../config";

const http = axios.create({
  baseURL: baseurl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

http.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default httpService;
