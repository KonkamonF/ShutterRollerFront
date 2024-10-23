import React, { useEffect, useState } from "react";
import useUser from "../../Contexts/UserContext";
import { getAccessToken } from "../../Utils/Local-storage";

export default function ManageUserAdmin() {
  const { apiAllUser } = useUser();
  const [member, setMember] = useState([]);

  const allData = async () => {
    try {
      const response = await apiAllUser(getAccessToken());
      setMember(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <div className="w-full text-white ">
      <form action="" className="py-4 flex justify-center">
        <input
          type="text"
          className="bg-[#420516] rounded-lg border h-8 p-2 mr-4"
          placeholder="SEARCH"
        />
        <button className="rounded-lg h-8 p-2 hover:bg-[#e26c22] hover:border-[#e26c22] cursor-pointer flex justify-center items-center border">
          SEARCH
        </button>
      </form>
      <p className="bg-[#86003C] text-3xl font-bold rounded-lg p-2 text-center">
        USER INFORMATION
      </p>
      <table className=" text-center w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-[#e26c22]">
            <th className="border-collapse border p-2">ID</th>
            <th className="border-collapse border p-2">FIRSTNAME</th>
            <th className="border-collapse border p-2">LASTNAME</th>
            <th className="border-collapse border p-2">PHONE</th>
            <th className="border-collapse border p-2">ADDRESS</th>
            <th className="border-collapse border p-2">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {member.map((e, i) => {
            return (
              <tr className="bg-[#420516]">
                <td className="border-collapse border p-2">{i + 1}</td>
                <td className="border-collapse border p-2">{e.firstName}</td>
                <td className="border-collapse border p-2">{e.lastName}</td>
                <td className="border-collapse border p-2">{e.phone}</td>
                <td className="border-collapse border p-2">{e.address}</td>
                <td className="border-collapse border p-2">{e.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
