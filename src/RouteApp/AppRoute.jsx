import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeAdmin from "../Pages/Admin/HomeAdmin";
import HomeUser from "../Pages/User/HomeUser";
import ManageUserAdmin from "../Pages/Admin/ManageUserAdmin";
import CheckPaymentAdmin from "../Pages/Admin/CheckPaymentAdmin";
import UserProductAdmin from "../Pages/Admin/UserProductAdmin";
import ServiceUser from "../Pages/User/ServiceUser";
import QuestionUser from "../Pages/User/QuestionUser";
// import ProfileUser from "../Pages/User/ProfileUser";
import MainHomeUser from "../Pages/User/MainHomeUser";
import QuestionAdmin from "../Pages/Admin/QuestionAdmin";
import PageNotFound from "../Utils/pageNotFound";
import ProtectRoute from "./ProtectRoute";
import Unauthorization from "../Utils/unauthorization";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
    children: [
      { path: "/", element: <MainHomeUser /> },
      { path: "service", element: <ServiceUser /> },
      { path: "question", element: <QuestionUser /> },
      // { path: "profile", element: <ProfileUser /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <ProtectRoute element={<HomeAdmin />} allow={["ADMIN"]} />,
    children: [
      { path: "manage", element: <ManageUserAdmin /> },
      { path: "checkPayment", element: <CheckPaymentAdmin /> },
      { path: "userProduct", element: <UserProductAdmin /> },
      { path: "unauthorization", element: <Unauthorization /> },
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
