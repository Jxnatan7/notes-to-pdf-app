import axios from "axios";

const api = axios.create({
  baseURL: "http://177.71.241.92:3000",
});

export default api;
