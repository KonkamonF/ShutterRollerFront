import axios from "axios";

export const createRecord = (form) =>
  axios.post("http://localhost:8000/service/record", form);

export const allRecord = () =>
  axios.get("http://localhost:8000/service/product");

export const createQuestion = (token ,form) =>
  axios.post("http://localhost:8000/question/userquestion",form,{ headers: { Authorization: `Bearer ${token}` } });
