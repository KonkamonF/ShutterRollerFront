import React, { useEffect, useRef, useState } from "react";
import Payment from "../assets/Payment.png";
import useAdmin from "../Contexts/AdminContext";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function PaymentUser({ setPayment, post }) {
  const { apiCreatePayment, apiAllRecord } = useAdmin();
  const file = useRef();
  const [upload, setUpload] = useState(null);
  const [record, setRecord] = useState([]);

  const submitPayment = async (e) => {
    try {
      console.log("object");
      e.stopPropagation();
      e.preventDefault();

      const payload = new FormData();
      payload.append("paymentImg", upload);
      payload.append("productId", post.id);
      await apiCreatePayment(payload);
      setUpload(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 z-50 flex items-center justify-center bg-[#49963640] w-screen h-screen"
        onClick={() => setPayment(false)}
      >
        <div className="relative">
          <div className="flex justify-center shadow-xl absolute top-[-75px] left-[38%] bg-[#e26c22] rounded-full p-8">
            <IoMdCheckboxOutline size={60} color="#E5E483" />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[30px] rounded-xl h-auto w-[500px] p-1 bg-[#e26c22] text-white "
          >
            <div className="flex flex-col gap-4 p-8">
              <p className="text-center text-3xl font-bold">CHECK OUT</p>

              <form onSubmit={submitPayment} className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <p>RECORD :</p>
                  <p>{post.name}</p>
                </div>
                <div className="flex justify-between">
                  <p>TYPE :</p>
                  <p>{post.type}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>SIZE :</p>
                  <div className="flex gap-4">
                    <p>Width {post.weight} square meter</p>
                    <p>Height {post.high} square meter</p>
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <p className="text-xl">TOTAL</p>
                  <p className="text-xl">{post.price} BATH</p>
                </div>

                <div className="flex justify-center items-center flex-col gap-4">
                  <img src={Payment} alt="" className="w-[250px] rounded-lg" />

                  <input
                    ref={file}
                    type="file"
                    accept="image/*"
                    name="paymentImg"
                    className="rounded-xl border hidden"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setUpload(e.target.files[0]);
                      }
                    }}
                  />
                  {upload ? (
                    <div className="w-[100px]">
                      <img src={URL.createObjectURL(upload)} />{" "}
                    </div>
                  ) : null}
                  <div
                    onClick={(e) => {
                      file.current.click();
                      e.stopPropagation();
                    }}
                    className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#481E14] hover:border-[#481E14] p-2"
                  >
                    UPLOAD SLIP
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-[#481E14] hover:border-[#481E14] transform transition-transform duration-75 hover:scale-110 border p-[4px] w-[200px] rounded-md shadow-xl"
                  >
                    DEPOSIT PAYMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
