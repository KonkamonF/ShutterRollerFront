import React, { useEffect, useState } from "react";
import useAdmin from "../../Contexts/AdminContext";
import useUser from "../../Contexts/UserContext";

export default function UserProductAdmin() {
  const { apiAllRecord } = useAdmin();
  const { apiAllUser } = useUser();
  const [record, setRecord] = useState([]);
  const [member, setMember] = useState([])

  const allRecord = async () => {
    try {
      const products = await apiAllRecord();
      setRecord(products);
    } catch (err) {
      console.log(err);
    }
  };

  const allUser =async()=>{
    try {
      const response = await apiAllUser()
      setMember(response)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    allRecord();
    allUser()
  }, []);

  console.log('record', record)

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
        <thead>
          <tr className="bg-[#e26c22]">
            <th className="border-collapse border p-2">ID</th>
            <th className="border-collapse border p-2">FIRSTNAME</th>
            <th className="border-collapse border p-2">PHONE</th>
            <th className="border-collapse border p-2">ADDRESS</th>
            <th className="border-collapse border p-2">TYPE</th>
            <th className="border-collapse border p-2">COLOR</th>
            <th className="border-collapse border p-2">WIDTH</th>
            <th className="border-collapse border p-2">HIGH</th>
            <th className="border-collapse border p-2">PAYMENT STATUS</th>
          </tr>
        </thead>
        <tbody>
          {record.map((e, i) => {
            return (
              <tr key={e.id} className="bg-[#072212]">
                <td className="border-collapse border p-2">{i + 1}</td>
                <td className="border-collapse border p-2">{e.user.firstName}</td>
                <td className="border-collapse border p-2">{e.user.phone}</td>
                <td className="border-collapse border p-2">{e.user.address}</td>
                <td className="border-collapse border p-2">{e.type}</td>
                <td className="border-collapse border p-2">{e.color}</td>
                <td className="border-collapse border p-2">{e.weight}</td>
                <td className="border-collapse border p-2">{e.high}</td>
                <td className="border-collapse border p-2">{e.Payment.statusPayment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
