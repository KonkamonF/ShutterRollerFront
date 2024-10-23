import { createContext, useContext, useEffect, useState } from "react";
import {
  allQuestion,
  allRecord,
  createQuestion,
  createRecord,
  allPayment,
  createPayment,
  answerQuestion,
  updateStatus,
  deleteProduct,
  deleteQuestion,
} from "../api/apiRecord";
import { toast } from "react-toastify";
import { getAccessToken } from "../Utils/Local-storage";

export const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const token = getAccessToken();
  const [allPayments, setAllPayment] = useState([]);

  const apiCreateRecord = async (form) => {
    try {
      const createdRecord = await createRecord(token, form);
      toast.success("CREATED YOUR RECORD");
    } catch (err) {
      console.log(err);
      toast.error("TRY TO CREATE RECORD AGAIN");
    }
  };

  const apiAllRecord = async () => {
    try {
      const response = await allRecord();
      return response.data.allProduct;
    } catch (err) {
      console.log(err);
    }
  };

  const apiCreateQuestion = async (form) => {
    try {
      const createdQuestion = await createQuestion(token, form);
      toast.success("CREATED YOUR QUESTION");
    } catch (err) {
      console.log(err);
      toast.error("TRY TO CREATE QUESTION AGAIN");
    }
  };

  const apiAllQuestion = async () => {
    try {
      const allQuestions = await allQuestion(token);
      return allQuestions.data.totalQuestion;
    } catch (err) {
      console.log(err);
    }
  };

  const apiAllPayment = async () => {
    try {
      const allPayments = await allPayment();
      setAllPayment(allPayments.data.allPaid);
    } catch (err) {
      console.log(err);
    }
  };

  const apiCreatePayment = async (form) => {
    try {
      console.log("form", form);
      const createPayments = await createPayment(token, form);
      toast.success("PAID");
    } catch (err) {
      toast.error("TRY TO CREATE QUESTION AGAIN");
      console.log(err);
    }
  };

  const apiAnswer = async (form, id) => {
    try {
      const answer = await answerQuestion(token, form, id);
      toast.success("ANSWER SUCCESS");
    } catch (err) {
      toast.error("TRY TO CREATE ANSWER AGAIN");
      console.log(err);
    }
  };

  const apiUpdateStatus = async (form, id) => {
    try {
      const payload = { statusPayment: form };
      const res = await updateStatus(token, payload, id);
      toast.success("UPDATED STATUS SUCCESS");
    } catch (err) {
      toast.error("TRY TO UPDATE AGAIN");
      console.log(err);
    }
  };

  const apiUpdateProfile = async (form, id) => {
    try {
      const response = await editedProfile(token, form, id);
      toast.success("UPDATED PROFILE SUCCESS");
    } catch (err) {
      toast.error("TRY TO UPDATE AGAIN");
      console.log(err);
    }
  };

  const apiUpdateProduct = async (form, id) => {
    try {
      await editedProfile(token, form, id);
      toast.success("UPDATED PRODUCT SUCCESS");
    } catch (err) {
      toast.error("TRY TO UPDATE AGAIN");
      console.log(err);
    }
  };

  const apiDeletedProduct = async (id) => {
    try {
      await deleteProduct(token, id);
      toast.success("DELETED PRODUCT SUCCESS");
    } catch (err) {
      toast.error("TRY TO DELETED AGAIN");
      console.log(err);
    }
  };

  const apiDeletedQuestion = async (id) => {
    try {
      await deleteQuestion(token, id);
      toast.success("DELETED QUESTION SUCCESS");
    } catch (err) {
      toast.error("TRY TO DELETED AGAIN");
      console.log(err);
    }
  };
  const value = {
    apiAllPayment,
    apiAllRecord,
    apiCreateRecord,
    apiCreateQuestion,
    apiAllQuestion,
    apiCreatePayment,
    apiAnswer,
    apiUpdateStatus,
    apiUpdateProfile,
    apiUpdateProduct,
    apiDeletedProduct,
    allPayments,
    apiDeletedQuestion
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export default function useAdmin() {
  return useContext(AdminContext);
}
