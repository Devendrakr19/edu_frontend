import baseurl from "../../config";
import http from "./httpService";

const gettoken = () => {
  return sessionStorage.getItem("token");
};

const profileService = () => {
  const token = gettoken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    withCredentials: true,
  };

  return {
    profile: async () => {
      const url = `${baseurl}/user/profile`;
      try {
        const response = await http.get(url, config);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
};

export default profileService;
