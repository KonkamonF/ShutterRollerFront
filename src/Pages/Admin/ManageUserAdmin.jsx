import React, { useEffect, useState } from "react";
import useUser from "../../Contexts/UserContext";

export default function ManageUserAdmin() {
  const { apiAllUser } = useUser();
  const [member, setMember] = useState([]);

  const allData = async () => {
    try {
      const response = await apiAllUser();
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
      <form action="" className="pt-4 flex justify-center">
        <input
          type="text"
          className="bg-[#072212] rounded-lg border h-8 p-2 mr-4"
          placeholder="SEARCH"
        />
        <button className="rounded-lg h-8 p-2 hover:bg-[#e26c22] hover:border-[#e26c22] cursor-pointer flex justify-center items-center border">
          SEARCH
        </button>
      </form>
      <table className=" text-center w-full mt-4 border-collapse">
        <tr className="bg-[#e26c22]">
          <th className="border-collapse border p-2">ID</th>
          <th className="border-collapse border p-2">FIRSTNAME</th>
          <th className="border-collapse border p-2">LASTNAME</th>
          <th className="border-collapse border p-2">PHONE</th>
          <th className="border-collapse border p-2">ADDRESS</th>
          <th className="border-collapse border p-2">EMAIL</th>
        </tr>

        {member.map((e, i) => {
          return (
            <tr className="bg-[#072212]">
              <td className="border-collapse border p-2">{i + 1}</td>
              <td className="border-collapse border p-2">{e.firstName}</td>
              <td className="border-collapse border p-2">{e.lastName}</td>
              <td className="border-collapse border p-2">{e.phone}</td>
              <td className="border-collapse border p-2">{e.address}</td>
              <td className="border-collapse border p-2">{e.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
