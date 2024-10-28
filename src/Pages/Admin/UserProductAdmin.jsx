import React, { useEffect, useState } from "react";
import useAdmin from "../../Contexts/AdminContext";
import useUser from "../../Contexts/UserContext";
import { getAccessToken } from "../../Utils/Local-storage";

export default function UserProductAdmin() {
  const { apiAllRecord, allPayments, apiAllPayment } = useAdmin();
  const [record, setRecord] = useState([]);

  const allRecord = async () => {
    try {
      const products = await apiAllRecord(getAccessToken());
      setRecord(products);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(record, "record");

  useEffect(() => {
    allRecord();
    apiAllPayment();
  }, []);

  console.log("allPayments", allPayments);
  return (
    <div className="w-full text-white">
      <form action="" className="py-4 flex justify-center">
        {/* <input
          type="text"
          className="bg-[#420516] rounded-lg border h-8 p-2 mr-4"
          placeholder="SEARCH"
        />
        <button className="rounded-lg h-8 p-2 hover:bg-[#e26c22] hover:border-[#e26c22] cursor-pointer flex justify-center items-center border">
          SEARCH
        </button> */}
      </form>
      <p className="bg-[#86003C] text-3xl font-bold rounded-lg p-2 text-center">
        USER PRODUCT
      </p>
      <table className="text-center w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-[#e26c22]">
            <th className="border-collapse border p-2">ID</th>
            <th className="border-collapse border p-2">FIRSTNAME</th>
            <th className="border-collapse border p-2">PHONE</th>
            <th className="border-collapse border p-2">ADDRESS</th>
            <th className="border-collapse border p-2">TYPE</th>
            <th className="border-collapse border p-2">COLOR</th>
            <th className="border-collapse border p-2">WEIGHT</th>
            <th className="border-collapse border p-2">HIGH</th>
            <th className="border-collapse border p-2">PAYMENT STATUS</th>
          </tr>
        </thead>
        <tbody>
          {record.map((e, i) => {
            console.log(e);
            return (
              <tr key={e.id} className="bg-[#420516]">
                <td className="border-collapse border p-2">{i + 1}</td>
                <td className="border-collapse border p-2">
                  {e.user.firstName}
                </td>
                <td className="border-collapse border p-2">{e.user.phone}</td>
                <td className="border-collapse border p-2">{e.user.address}</td>
                <td className="border-collapse border p-2">{e.type}</td>
                <td className="border-collapse border p-2">{e.color}</td>
                <td className="border-collapse border p-2">{e.weight}</td>
                <td className="border-collapse border p-2">{e.high}</td>
                <td className="border-collapse border p-2">
                  {e?.Payment[e.Payment.length-1]?.statusPayment}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
