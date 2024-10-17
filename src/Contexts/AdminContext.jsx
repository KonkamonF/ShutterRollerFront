import { createContext, useContext, useEffect, useState } from "react";
import { allRecord, createQuestion, createRecord } from "../api/apiRecord";
import { toast } from "react-toastify";
import { getAccessToken } from "../Utils/Local-storage";

export const AdminContext = createContext();

export function AdminContextProvider({ children }) {

  const token = getAccessToken()
  
  const apiCreateRecord = async (form)=>{
    try {
      const createdRecord = await createRecord(form)
      toast.success("CREATED YOUR RECORD")
    } catch (err) {
      console.log(err);
      toast.error("TRY TO CREATE RECORD AGAIN")
    }
  }
  
  const apiAllRecord = async () => {
    try {
      const response = await allRecord();
      return response.data.allProduct;
      
    } catch (err) {
      console.log(err);
    }
  };

  const apiCreateQuestion = async(form)=>{
    try {
      const createdQuestion =  await createQuestion(token,form)
      toast.success("CREATED YOUR QUESTION")
    } catch (err) {
      console.log(err);
      toast.error("TRY TO CREATE QUESTION AGAIN")
    }
  }

  const value = {
    apiAllRecord,
    apiCreateRecord,
    apiCreateQuestion
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
}

export default function useAdmin() {
  return useContext(AdminContext);
}
