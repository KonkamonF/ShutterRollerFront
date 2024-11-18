import axios from "axios";

export const createRecord = (token, form) =>
  axios.post("http://localhost:8000/service/record", form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allRecord = (token, form) =>
  axios.get("http://localhost:8000/service/product", form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createQuestion = (token, form) =>
  axios.post("http://localhost:8000/question/userquestion", form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allQuestion = (token) =>
  axios.get("http://localhost:8000/question/all", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allPayment = (token, form) =>
  axios.get("http://localhost:8000/payment/all", form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const createPayment = (token, form) =>
  axios.post("http://localhost:8000/payment/createpayment", form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const editProduct = (token, form, id) =>
  axios.patch(`http://localhost:8000/service/edited/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const answerQuestion = (token, form, id) =>
  axios.patch(`http://localhost:8000/question/answer/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateStatus = (token, form, id) =>
  axios.patch(`http://localhost:8000/payment/update/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const editedProfile = (token, form, id) =>
  axios.patch(`http://localhost:8000/auth/edit/${id}`, form, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProduct = (token, id) =>
  axios.delete(`http://localhost:8000/service/deleted/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteQuestion = (token, id) =>
  axios.delete(`http://localhost:8000/question/deleted/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const allRecordShow = (token, userId) => {
  return axios.post(
    "http://localhost:8000/service/product/all",
    // FIX : end point
    { userId: userId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
