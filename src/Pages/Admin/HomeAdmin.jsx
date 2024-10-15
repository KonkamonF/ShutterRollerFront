import React from "react";
import NavbarAdmin from "../../Components/NavbarAdmin";
import SidebarAdmin from "../../Components/SidebarAdmin";
import { Outlet } from "react-router-dom";

export default function HomeAdmin() {
  return (
    <>
      <div className="flex bg-[#072212]">
        <SidebarAdmin />
        <div className="flex flex-col">
          <NavbarAdmin />
          <Outlet />
        </div>
      </div>
    </>
  );
}
