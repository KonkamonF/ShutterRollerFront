import React, { useEffect, useState } from "react";
import { RiChatSmile3Fill } from "react-icons/ri";
import useAdmin from "../Contexts/AdminContext";
import useUser from "../Contexts/UserContext";
import { getAccessToken } from "../Utils/Local-storage";

export default function ProfileAdmin({ setProfileAdmin }) {
  const { apiUpdateProfile } = useAdmin;
  const { apiAllUser } = useUser;
  const [update, setUpdate] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const allUser = async () => {
    try {
      const allUsers = await apiAllUser(getAccessToken());
    } catch (err) {
      console.log(err);
    }
  };

  const hdChange = async (e) => {
    setUpdate(e.target.value);
  };

  const submitUpdateProfile = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const updatedProfile = await apiUpdateProfile(form, id);
      setUpdate(updatedProfile);
      allUser();
      setProfileAdmin(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allUser();
  }, []);

  return (
    <>
      <div
        className="text-[#ffffff] flex items-center pl-[500px] top-0 z-50 bg-[#49963640] w-screen fixed h-screen"
        onClick={() => setProfileAdmin(false)}
      >
        <div className="relative">
          <div className="flex justify-center shadow-xl absolute top-[-75px] left-[38%] bg-[#e26c22] rounded-full p-8">
            <RiChatSmile3Fill size={60} color="#E5E483" />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none py-[40px]  rounded-xl h-auto w-[500px] p-1 bg-[#e26c22]  "
          >
            <div className="text-center flex flex-col gap-4 justify-center">
              <div className="flex justify-center"></div>
              <form
                action=""
                className="flex flex-col  gap-4 items-center pt-[10px] "
                onSubmit={(e) => {
                  submitUpdateProfile();
                }}
              >
                <input
                  type="text"
                  name="firstName"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="FIRSTNAME"
                  onChange={hdChange}
                />
                <input
                  type="text"
                  name="lastName"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="LASTNAME"
                  onChange={hdChange}
                />
                <input
                  type="text"
                  name="phone"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="PHONE"
                  onChange={hdChange}
                />
                <input
                  type="text"
                  name="address"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="ADDRESS"
                  onChange={hdChange}
                />
                <input
                  type="email"
                  name="email"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="E-MAIL"
                  onChange={hdChange}
                />
                <input
                  type="password"
                  name="password"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="CHANGE PASSWORD"
                  onChange={hdChange}
                />
                <input
                  type="password"
                  name="password"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m text-[#481E14]"
                  placeholder="CONFIRM PASSWORD"
                  onChange={hdChange}
                />
                <button className=" hover:bg-[#ffa064] hover:border-[#ffa064] border p-[4px] w-[200px] rounded-md shadow-xl">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
