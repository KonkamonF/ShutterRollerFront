import axios from "axios";

export const register = (form) =>
  axios.post("http://localhost:8000/auth/register", form);

export const login = (form) =>
  axios.post("http://localhost:8000/auth/login", form);

export const allUser = (token) =>
  axios.get("http://localhost:8000/auth/user", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUser = (token) =>
  axios.get("http://localhost:8000/auth/getuser", {
    headers: { Authorization: `Bearer ${token}` },
  });
