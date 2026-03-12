import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

// --- Auth ---
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);

// --- Transactions ---
export const getTransactions = (userId) => API.get(`/transactions?user_id=${userId}`);
export const addTransaction = (data) => API.post("/transaction/add", data);
export const updateTransaction = (id, data) => API.put(`/transaction/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/transaction/${id}`);