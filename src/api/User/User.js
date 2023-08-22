// apiService.js
import axios from "axios";

const API_URL = "https://64a03dd8ed3c41bdd7a72114.mockapi.io";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const fetchProducts = () => {
  return axiosInstance.get("/users");
};

export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.get("/users", {
      params: {
        email: credentials.email,
        password: credentials.password,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
