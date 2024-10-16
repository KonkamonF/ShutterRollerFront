import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Login from "./Login";
import Register from "./Register";
import useUser from "../Contexts/UserContext";
import ContactUser from "../Pages/User/ContactUser";

export default function NavbarUser() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [contact, setContact] = useState(false);
  const { role, logOut } = useUser();

  return (
    <>
      {isShowLogin && (
        <Login
          setIsShowLogin={setIsShowLogin}
          setIsShowRegister={setIsShowRegister}
        />
      )}

      {isShowRegister && (
        <Register
          setIsShowRegister={setIsShowRegister}
          setIsShowLogin={setIsShowLogin}
        />
      )}

      {contact && <ContactUser setContact={setContact} />}

      <div className="bg-[#072212] justify-center flex-col text-white flex items-center pt-4">
        <div className="flex items-center gap-16">
          <Link
            to={"/service"}
            className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
          >
            SERVICE
          </Link>
          <Link
            to={"/question"}
            className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
          >
            Q&A
          </Link>
          <Link to={"/"}>
            <img
              src={Logo}
              className="w-[90px] transform transition-transform duration-75 hover:scale-110"
            />
          </Link>

          <button
            className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
            onClick={() => {
              setContact(true);
            }}
          >
            CONTACT US
          </button>
          {role ? (
            <button
              onClick={logOut}
              className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={() => setIsShowLogin(true)}
              className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 hover:bg-[#e26c22] cursor-pointer"
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </>
  );
}
