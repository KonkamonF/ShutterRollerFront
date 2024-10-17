import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import useUser from "../Contexts/UserContext";
import { RiChatSmile3Fill } from "react-icons/ri";
import validateRegister from "../Utils/validator";
import { isError } from "joi";

export default function Register({ setIsShowRegister, setIsShowLogin }) {
  const { apiRegister } = useUser();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hdChange = (e) => {
    const value = { ...form, [e.target.name]: e.target.value };
    setForm(value);
  };
  const submitRegister = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const isError = validateRegister(form);
    if (isError) {
      setError(isError);
      return console.log(error.email);
    }
    await apiRegister(form);
    setIsShowRegister(false);
    setIsShowLogin(true);
  };
  return (
    <>
      {
        <div
          onClick={() => setIsShowRegister(false)}
          className="fixed top-0 z-50 w-screen h-screen flex items-center justify-center bg-[#49963640] text-white "
        >
          <div className="relative mt-20">
            <div className="flex justify-center shadow-xl bg-[#e26c22] absolute top-[-75px] left-[38%] rounded-full p-8">
              <RiChatSmile3Fill size={60} color="#E5E483" />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=" pt-[20px] rounded-xl h-auto w-[500px]  p-1 bg-[#e26c22]  "
            >
              <div className="text-center flex flex-col gap-4 justify-center">
                <form
                  action=""
                  className="flex flex-col gap-2 items-center pt-[10px] mt-9"
                  onSubmit={submitRegister}
                >
                  <input
                    type="text"
                    value={form.firstName}
                    name="firstName"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="FIRSTNAME"
                  />
                  <span className="text-sm text-red-800">
                    {error.firstName}
                  </span>
                  <input
                    type="text"
                    value={form.lastName}
                    name="lastName"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="LASTNAME"
                  />
                  <span className="text-sm text-red-800 ">
                    {error.lastName}
                  </span>
                  <input
                    type="text"
                    value={form.phone}
                    name="phone"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="PHONE"
                  />
                  <span className="text-sm text-red-800 ">{error.phone}</span>

                  <input
                    type="text"
                    value={form.address}
                    name="address"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="ADDRESS"
                  />
                  <span className="text-sm text-red-800 ">{error.address}</span>
                  <input
                    type="text"
                    value={form.lineId}
                    name="address"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="LINE ID"
                  />
                  <span></span>
                  <input
                    type="email"
                    value={form.email}
                    name="email"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="E-MAIL"
                  />
                  <span className="text-sm text-red-800 ">{error.email}</span>
                  <input
                    type="password"
                    value={form.password}
                    name="password"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="PASSWORD"
                  />
                  <span className="text-sm text-red-800 ">
                    {error.password}
                  </span>
                  <input
                    type="password"
                    value={form.confirmPassword}
                    name="confirmPassword"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="CONFIRMPASSWORD"
                  />
                  <span className="text-sm text-red-800 ">
                    {error.confirmPassword}
                  </span>
                  <button className=" hover:bg-[#481E14] hover:border-[#481E14] transform transition-transform duration-75 hover:scale-110 border p-[4px] w-[200px] rounded-md shadow-xl">
                    REGISTER
                  </button>
                </form>
                <div className="flex flex-col gap-4 text-sm">
                  OR CONTINUE WITH
                  <div className="flex justify-center gap-4 cursor-pointer pb-6 text-[#481E14]">
                    <FaFacebook
                      size={30}
                      className=" transform transition-transform duration-75 hover:scale-110"
                    />
                    <BsInstagram
                      size={30}
                      className="transform transition-transform duration-75 hover:scale-110"
                    />
                    <FaXTwitter
                      size={30}
                      className="transform transition-transform duration-75 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
