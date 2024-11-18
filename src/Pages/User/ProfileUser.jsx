import React, { useEffect } from "react";
import { useState } from "react";
import useAdmin from "../../Contexts/AdminContext";
import useUser from "../../Contexts/UserContext";
import { getAccessToken } from "../../Utils/Local-storage";

export default function Register() {
  const { apiUpdateProfile, apiAllRecordShow } = useAdmin();
  const { apiAllUser, user } = useUser();
  const [profile, setProfile] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    lineId: "",
    email: "",
    password: "",
  });

  const allUser = async () => {
    try {
      const response = await apiAllRecordShow(getAccessToken(), user);
      setProfile(response);
    } catch (err) {
      console.log(err);
    }
  };

  const hdChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitRegister = async (e) => {
    try {
      e.preventDefault();
      const data = {};
      if (form.firstName) {
        data.firstName = form.firstName;
      }
      if (form.lastName) {
        data.lastName = form.lastName;
      }
      if (form.phone) {
        data.phone = form.phone;
      }
      if (form.address) {
        data.address = form.address;
      }
      if (form.lineId) {
        data.lineId = form.lineId;
      }
      if (form.email) {
        data.email = form.email;
      }
      if (form.password) {
        data.password = form.password;
      }
      await apiUpdateProfile(data, user?.id);
      await allUser();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    allUser();
  }, []);

  return (
    <>
      <div className="pt-32 flex justify-center  bg-[#072212] text-white">
        <div className=" rounded-xl h-auto w-[500px]  p-1 bg-[#e26c22]  ">
          <div className="text-center flex flex-col gap-4 justify-center">
            <form
              action=""
              className="flex flex-col gap-2 items-center pt-[10px] mt-9"
              onSubmit={submitRegister}
            >
              <p>{user?.firstName}</p>
              <input
                type="text"
                value={form.firstName}
                name="firstName"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="FIRSTNAME"
              />
              <p>{user?.lastName}</p>
              <input
                type="text"
                value={form.lastName}
                name="lastName"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="LASTNAME"
              />
              <p>{user?.phone}</p>
              <input
                type="text"
                value={form.phone}
                name="phone"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="PHONE"
              />
              <p>{user?.address}</p>
              <input
                type="text"
                value={form.address}
                name="address"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="ADDRESS"
              />
              <p>{user?.lineId}</p>
              <input
                type="text"
                value={form.lineId}
                name="lineId"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="LINE ID"
              />
              <p>{user?.email}</p>
              <input
                type="email"
                value={form.email}
                name="email"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="E-MAIL"
              />
              <p>{user?.password}</p>
              <input
                type="password"
                value={form.password}
                name="password"
                onChange={hdChange}
                className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                placeholder="PASSWORD"
              />
              <button className=" hover:bg-[#481E14] hover:border-[#481E14] transform transition-transform duration-75 hover:scale-110 border p-[4px] w-[200px] rounded-md shadow-xl">
                UPDATE PROFILE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
