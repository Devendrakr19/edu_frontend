import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleFailure = (err, displayMsg = "") => {
  if (!err.response) {
    // Network error or other error without a response
    toast.error(displayMsg || "An unexpected error occurred.");
    console.error("Network error:", err);
    return;
  }

  const errorRes = err.response;
  const status = errorRes.status;
  const data = errorRes.data;

  switch (status) {
    case 400:
      if (Array.isArray(data.errors)) {
        data.errors.forEach((error) => toast.error(error));
      } else {
        toast.error(data.errors || "Bad Request");
      }
      break;
    case 401:
      if (Array.isArray(data.errors)) {
        data.errors.forEach((error) => toast.error(error));
      } else {
        toast.error(data.detail || "Unauthorized");
      }
      break;
    case 404:
      if (Array.isArray(data.errors)) {
        data.errors.forEach((error) => toast.error(error));
      } else {
        toast.error(data.message || "Not Found");
      }
      break;
    case 500:
      if (Array.isArray(data.errors)) {
        data.errors.forEach((error) => toast.error(error));
      } else {
        toast.error(displayMsg || "Some Error occurred !!");
      }
      break;
    default:
      toast.error(displayMsg || "An unexpected error occurred.");
      break;
  }

  console.error("Error response:", errorRes);
};
