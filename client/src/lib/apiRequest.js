// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "http://localhost:8800/api",
//   withCredentials: true,
// });

// export default apiRequest;

import axios from "axios";

// Set the baseURL depending on the environment (development or production)
const apiRequest = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
    ? "https://campus-connect-api-zeta.vercel.app/api"  // Production backend URL
    : "http://localhost:8800/api",  // Local backend URL for development
  withCredentials: true,
});

export default apiRequest;
