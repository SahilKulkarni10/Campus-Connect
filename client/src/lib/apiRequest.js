import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://campus-connect-api-ruddy.vercel.app",
  withCredentials: true,
});

export default apiRequest;
