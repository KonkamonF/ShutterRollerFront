import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import useUser from "../Contexts/UserContext";

export default function NavbarAdmin() {
  const { logOut } = useUser();
  return (
    <div className="bg-[#86003C] flex flex-row justify-between items-center px-4 text-white mt-4 rounded-xl">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={Logo} className="w-[70px]" />
        </Link>
        <Link
          to={"/"}
          className="flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
        >
          HOME
        </Link>
      </div>
      <Link
        to={"/"}
        className="flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
        onClick={logOut}
      >
        LOGOUT
      </Link>
    </div>
  );
}
