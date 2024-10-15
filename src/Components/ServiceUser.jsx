import React, { useState } from "react";
import { ImBin2 } from "react-icons/im";


export default function ServiceUserComponent({ setPayment, setService }) {
  const submitPayment = async (e) => {
    try {
      e.stopPropagation();
      e.preventDefault();
      setService(false);
      setPayment(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {
        <div
          className="fixed top-0 z-50 flex items-center justify-center bg-[#49963640] w-screen h-screen text-white"
          onClick={() => {
            setService(false);
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[20px] rounded-xl h-auto w-[500px] p-1 bg-[#e26c22]  "
          >
            <div className="flex flex-col gap-4 p-8">
              <div className="flex justify-between">
                <p>RECORD :</p>
                <form action="" className="flex gap-2">
                  <select
                    name=""
                    id=""
                    className="bg-[#e26c22] border p-1 rounded-lg"
                  >
                    <option value="">RECORD 1</option>
                    <option value="">RECORD 2</option>
                  </select>
                  <button className="border rounded-lg p-1 hover:bg-[#FFFFFF] hover:border-[#FFFFFF] transform transition-transform duration-75 hover:scale-110"><ImBin2 color="#481E14" />
                  </button>
                </form>
              </div>

              <form
                action=""
                className="flex flex-col gap-4 "
                onSubmit={submitPayment}
              >
                <div className="flex justify-between">
                  <p>TYPE :</p>
                  <select
                    name=""
                    id=""
                    className="bg-[#e26c22] border p-1 rounded-lg"
                  >
                    <option value="">AUTOMATIC</option>
                    <option value="">STANDARD USE</option>
                  </select>
                </div>

                <div className="flex gap-4 items-center justify-between">
                  <div>
                    <p>SIZE :</p>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      className="w-[100px] h-[30px] text-center"
                      placeholder="WIDTH"
                    />
                    <input
                      type="text"
                      className="w-[100px] h-[30px] text-center"
                      placeholder="HIGH"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <p>COLOR :</p>
                  <select
                    name=""
                    id=""
                    className="bg-[#e26c22] border p-1 rounded-lg"
                  >
                    <option value="">GRAY</option>
                    <option value="">BLUE</option>
                    <option value="">WHITE</option>
                  </select>
                </div>

                <div className="flex justify-between pt-4">
                  <p className="text-xl">TOTAL</p>
                  <p className="text-xl">100,000 BATH</p>
                </div>
                {/* <div className="flex justify-between">
                  <p>PAYMENT STATUS :</p>
                  <p>PENDING</p>
                </div> */}
                <div className="flex gap-4 justify-center items-center flex-col pt-4">
                  <button
                    className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14] bg-[#481E14] p-[4px] w-[200px] rounded-md shadow-xl"
                    onClick={() => {
                      e.stopPropagation();
                      setPayment(true);
                    }}
                  >
                    DEPOSIT PAYMENT
                  </button>
                  <button className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14]  p-[4px] w-[200px] rounded-md shadow-xl">
                    SAVE
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
