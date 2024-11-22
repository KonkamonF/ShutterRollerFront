import axios from "axios";
const URL = import.meta.env.VITE_API_URL


export const register = (form) =>
  axios.post(`${URL}/auth/register`, form);

export const login = (form) =>
  axios.post(`${URL}/auth/login`, form);

export const allUser = (token) =>
  axios.get(`${URL}/auth/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUser = (token) =>
  axios.get(`${URL}/auth/getuser`, {
    headers: { Authorization: `Bearer ${token}` },
  });
