// apiService.js
import axios from "axios";

// Định nghĩa URL của API mock
const API_URL = "https://64a03dd8ed3c41bdd7a72114.mockapi.io";

// Tạo một instance của Axios với baseURL là địa chỉ API mock
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Hàm fetchProducts: Gọi API để lấy danh sách sản phẩm
export const fetchProducts = () => {
  return axiosInstance.get("/Products");
};

// Hàm createProduct: Gọi API để tạo sản phẩm mới
export const createProduct = (productData) => {
  return axiosInstance.post("/Products", productData);
};

// Các hàm khác có thể được thêm tại đây nếu cần
