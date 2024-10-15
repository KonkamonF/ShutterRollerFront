import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeAdmin from "../Pages/Admin/HomeAdmin";
import HomeUser from "../Pages/User/HomeUser";
import ManageUserAdmin from "../Pages/Admin/ManageUserAdmin";
import CheckPaymentAdmin from "../Pages/Admin/CheckPaymentAdmin";
import UserProductAdmin from "../Pages/Admin/UserProductAdmin";
import ServiceUser from "../Pages/User/ServiceUser";
import QuestionUser from "../Pages/User/QuestionUser";
import ProfileUser from "../Pages/User/ProfileUser";
import MainHomeUser from "../Pages/User/MainHomeUser";
import QuestionAdmin from "../Pages/Admin/QuestionAdmin";
import PageNotFound from "../Utils/pageNotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
    children: [
      { path: "/", element: <MainHomeUser /> },
      { path: "service", element: <ServiceUser /> },
      { path: "question", element: <QuestionUser /> },
      { path: "profile", element: <ProfileUser /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <HomeAdmin />,
    children: [
      { path: "manage", element: <ManageUserAdmin /> },
      { path: "checkPayment", element: <CheckPaymentAdmin /> },
      { path: "userProduct", element: <UserProductAdmin /> },
      { path: "getQuestion", element: <QuestionAdmin /> },
    ],
  },
]);
export default function AppRoute() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}
