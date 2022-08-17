import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});

export { http };
