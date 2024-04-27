import axios, {AxiosRequestConfig} from "axios";

const api = axios.create({
  baseURL: "https://395e-177-128-36-177.ngrok-free.app",
});

export default api;
