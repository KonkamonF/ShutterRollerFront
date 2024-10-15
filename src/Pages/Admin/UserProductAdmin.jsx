import React from "react";

export default function UserProductAdmin() {
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
          <th className="border-collapse border p-2">PHONE</th>
          <th className="border-collapse border p-2">ADDRESS</th>
          <th className="border-collapse border p-2">TYPE</th>
          <th className="border-collapse border p-2">COLOR</th>
          <th className="border-collapse border p-2">WIDTH</th>
          <th className="border-collapse border p-2">HIGH</th>
          <th className="border-collapse border p-2">PAYMENT</th>
        </tr>

        <tr className="bg-[#072212]">
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
          <td className="border-collapse border p-2"></td>
        </tr>
      </table>
    </div>
  );
}
