import React from "react";
import NavbarUser from "../../Components/NavbarUser";
import { Outlet } from "react-router-dom";
import BottomBar from "../../Components/BottomBar";

export default function HomeUser() {
  return (
    <>
      <NavbarUser />
      <Outlet />
      <BottomBar />
    </>
  );
}
