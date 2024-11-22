import axios from "axios";
const URL = import.meta.env.VITE_API_URL

export const createRecord = (token, form) =>
  axios.post(`${URL}/service/record`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allRecord = (token, form) =>
  axios.get(`${URL}/service/product`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createQuestion = (token, form) =>
  axios.post(`${URL}/question/userquestion`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allQuestion = (token) =>
  axios.get(`${URL}/question/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allPayment = (token, form) =>
  axios.get(`${URL}/payment/all`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createPayment = (token, form) =>
  axios.post(`${URL}/payment/createpayment`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const editProduct = (token, form, id) =>
  axios.patch(`${URL}/service/edited/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const answerQuestion = (token, form, id) =>
  axios.patch(`${URL}/question/answer/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateStatus = (token, form, id) =>
  axios.patch(`${URL}/payment/update/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const editedProfile = (token, form, id) =>
  axios.patch(`${URL}/auth/edit/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProduct = (token, id) =>
  axios.delete(`${URL}/service/deleted/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteQuestion = (token, id) =>
  axios.delete(`${URL}/question/deleted/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allRecordShow = (token, userId) => {
  return axios.post(
    `${URL}/service/product/all`,
    { userId: userId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
