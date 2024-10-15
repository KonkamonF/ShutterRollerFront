import React from "react";
import Payment from "../assets/Payment.png";

export default function PaymentUser({ setPayment }) {
  const submitPayment = async (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <>
      {
        <div
          className="fixed top-0 z-50 flex items-center justify-center bg-[#49963640] w-screen h-screen"
          onClick={() => setPayment(false)}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[20px] rounded-xl h-auto w-[500px] p-1 bg-[#e26c22] text-white "
          >
            <div className="flex flex-col gap-4 p-8">
              <p className="text-center text-3xl font-bold">PAID</p>
              <form
                action=""
                className="flex justify-between items-center"
                onSubmit={submitPayment}
              >
                <p>RECORD :</p>
                <select
                  name=""
                  id=""
                  className="bg-[#e26c22] border p-1 rounded-lg"
                >
                  <option value="">RECORD 1</option>
                  <option value="">RECORD 2</option>
                </select>
              </form>

              <form action="" className="flex flex-col gap-4 ">
                <div className="flex justify-between">
                  <p>TYPE :</p>
                  <p>AUTOMATIC</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>SIZE :</p>

                  <div className="flex gap-4">
                    <p>WIDTH 1000 sqm.</p>
                    <p>HIGH 1000 sqm.</p>
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <p className="text-xl">TOTAL</p>
                  <p className="text-xl">100,000 BATH</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl font-bold">DEPOSIT</p>
                  <p className="text-xl font-bold"> 30,000 BATH</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-4">
                  <img src={Payment} alt="" className="w-[300px]" />
                  <button className=" hover:bg-[#481E14] hover:border-[#481E14] transform transition-transform duration-75 hover:scale-110 border p-[4px] w-[200px] rounded-md shadow-xl">
                    UPLOAD PAYMENT SLIP
                  </button>
                  <button className="hover:bg-[#481E14] hover:border-[#481E14] transform transition-transform duration-75 hover:scale-110 border p-[4px] w-[200px] rounded-md shadow-xl">
                    DEPOSIT PAYMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}
