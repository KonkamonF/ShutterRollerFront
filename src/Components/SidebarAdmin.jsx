import React, { useState, useEffect } from "react";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useUser from "../Contexts/UserContext";
import ProfileAdmin from "./ProfileAdmin";

export default function SidebarAdmin() {
  // const { apiAllUser } = useUser();
  // const [member, setMember] = useState([]);
  const [profileAdmin, setProfileAdmin] = useState(false);

  // const userName = async () => {
  //   try {
  //     const response = await apiAllUser();
  //     setMember(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   userName();
  // }, []);

  return (
    <>
      {profileAdmin && <ProfileAdmin setProfileAdmin={setProfileAdmin} />}
      <div className="bg-[#86003C] flex flex-col w-[220px] h-screen text-white m-4 rounded-xl">
        <div className="text-center flex flex-col items-center gap-6">
          <button
            className="flex flex-col items-center pt-4 gap-4"
            onClick={() => setProfileAdmin(true)}
          >
            <RiAccountPinCircleFill size={60} color="#FFD369" />
            {/* input name */}
            {/* {member.filter((e) => {
            return <p>{e.firstName}</p>;
          })} */}
          </button>
          <div className="flex flex-col items-center gap-3">
            <Link
              to={"manage"}
              className="border-none rounded-xl w-[200px] p-1 hover:bg-[#e26c22] cursor-pointer"
            >
              Manage User
            </Link>
            <Link
              to={"checkPayment"}
              className="border-none rounded-xl w-[200px] p-1 hover:bg-[#e26c22] cursor-pointer"
            >
              Check Payment
            </Link>
            <Link
              to={"userProduct"}
              className="border-none rounded-xl w-[200px] p-1 hover:bg-[#e26c22] cursor-pointer"
            >
              User's Product
            </Link>
            <Link
              to={"getQuestion"}
              className="border-none rounded-xl w-[200px] p-1 hover:bg-[#e26c22] cursor-pointer"
            >
              User's FQA
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
