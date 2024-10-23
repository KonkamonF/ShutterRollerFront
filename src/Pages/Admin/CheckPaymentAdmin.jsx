import React, { useEffect, useState } from "react";
import useAdmin from "../../Contexts/AdminContext";
import { getAccessToken } from "../../Utils/Local-storage";
import ShowSlip from "../../Components/ShowSlip";

export default function CheckPaymentAdmin() {
  const { apiAllPayment, apiUpdateStatus, allPayments } = useAdmin();
  const [allData, setAllData] = useState(null);
  const [status, setStatus] = useState("");
  const [showSlips, setShowSlips] = useState(false);
  const [image, setImage] = useState(null);

  const allPayment = async () => {
    try {
      const payments = await apiAllPayment(getAccessToken());
      setAllData(payments);
    } catch (err) {
      console.log(err);
    }
  };
  const hdChange = async (e) => {
    setStatus(e.target.value);
  };

  const submitUpdatePaid = async (e, id) => {
    e.preventDefault();
    try {
      if (!status) return;
      const changeStatus = await apiUpdateStatus(status, id);
      setStatus(changeStatus);
      allPayment();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allPayment();
    apiAllPayment();
  }, []);

  return (
    <>
      {showSlips && <ShowSlip setShowSlips={setShowSlips} src={image} />}
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
          CHECK PAYMENT
        </p>
        <table className=" text-center w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-[#e26c22]">
              <th className="border-collapse border p-2">ID</th>
              <th className="border-collapse border p-2">FIRSTNAME</th>
              <th className="border-collapse border p-2">PHONE</th>
              <th className="border-collapse border p-2">ADDRESS</th>
              <th className="border-collapse border p-2">EMAIL</th>
              <th className="border-collapse border p-2">RECORD PRODUCT</th>
              <th className="border-collapse border p-2">PRICE</th>
              <th className="border-collapse border p-2">SLIP IMAGE</th>
              <th className="border-collapse border p-2">PAYMENT STATUS</th>
              <th className="border-collapse border p-2">PAYMENT STATUS</th>
            </tr>
          </thead>

          <tbody>
            {allPayments &&
              allPayments.map((e, i) => {
                return (
                  <tr className="bg-[#420516]">
                    <td className="border-collapse border p-2">{i + 1}</td>
                    <td className="border-collapse border p-2">
                      {e.productRecord.user.firstName}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.productRecord.user.phone}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.productRecord.user.address}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.productRecord.user.email}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.productRecord.name}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.productRecord.price}
                    </td>
                    <td className="border-collapse border p-2 ">
                      <button
                        className="border p-2 rounded-lg"
                        onClick={() => {
                          setShowSlips(true);
                          setImage(e.paymentImg);
                        }}
                      >
                        SLIP
                      </button>
                    </td>
                    <td className="border-collapse border p-2">
                      <form onSubmit={(event) => submitUpdatePaid(event, e.id)}>
                        <select
                          name="statusPayment"
                          onChange={hdChange}
                          className="bg-[#420516] border p-1 mx-4 rounded-lg"
                        >
                          <option value="PENDING">PENDING</option>
                          <option value="PAID">PAID</option>
                        </select>
                        <button className="bg-[#420516] border p-1 rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22]">
                          SUBMIT
                        </button>
                      </form>
                    </td>
                    <td className="border-collapse border p-2">
                      {e.statusPayment}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
