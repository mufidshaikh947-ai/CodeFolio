import axios from "axios";
import { API_URL } from "../constants/api";

console.log("API_URL =", API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log("Sending request to:", config.baseURL + config.url);

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;