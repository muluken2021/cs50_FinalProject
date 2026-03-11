import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getTransactions = () => API.get("/transactions");

export const addTransaction = (data) =>
  API.post("/transaction/add", data);

export const deleteTransaction = (id) =>
  API.delete(`/transaction/${id}`);

export const getSummary = () =>
  API.get("/summary");