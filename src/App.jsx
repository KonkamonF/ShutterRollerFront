import React from "react";
import AppRoute from "./RouteApp/AppRoute";
import { UserContextProvider } from "./Contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext, AdminContextProvider } from "./Contexts/AdminContext";

export default function App() {
  return (
    <AdminContextProvider>
      <UserContextProvider>
        <ToastContainer />
        <AppRoute />
      </UserContextProvider>
    </AdminContextProvider>
  );
}
