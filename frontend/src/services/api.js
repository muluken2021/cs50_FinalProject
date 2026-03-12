import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

// Transactions
export const getTransactions = () => API.get("/transactions");
export const addTransaction = (data) => API.post("/transaction/add", data);
export const updateTransaction = (id, data) => API.put(`/transaction/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/transaction/${id}`);
export const getSummary = () => API.get("/summary");

// Auth
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);