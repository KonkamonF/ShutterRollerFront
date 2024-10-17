import React, { useState } from "react";
import ShutterRoller from "../../assets/ShutterRoller.png";
import { PiCursorClickFill } from "react-icons/pi";
import ServiceUserComponent from "../../Components/ServiceUser";
import PaymentUser from "../../Components/PaymentUser";

export default function ServiceUser() {
  const [service, setService] = useState(false);
  const [payment, setPayment] = useState(false);
  return (
    <>
      {service && (
        <ServiceUserComponent setService={setService} setPayment={setPayment} />
      )}
      {payment && <PaymentUser setPayment={setPayment} />}
      <div className="bg-[#072212] text-white">
        <div className="mx-80 pb-12 pt-12">
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 flex justify-center">
            <img src={ShutterRoller} alt="" className="w-[40%]" />
            <div className="flex flex-col justify-center">
              <p className="text-3xl text-[#e26c22]">AUTOMATIC ROLLER</p>
              <p className="text-xl">SECTIONAL DOORS</p>
              <p className="w-[300px] pt-4 pb-4">
                High-speed Rolling door is a kind of channel isolation door,
                used in printing, food, pharmaceutical and other factories, with
                good dustproof, odor proof, quick opening, heat preservation,
                protection and other functions.
              </p>
              <button
                className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 w-[35%] shadow-lg bg-[#e26c22] cursor-pointer gap-2"
                onClick={() => {
                  setService(true);
                }}
              >
                SERVICE
                <PiCursorClickFill />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-80">
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8  flex justify-center">
            <img src={ShutterRoller} alt="" className="w-[40%]" />
            <div className="flex flex-col justify-center">
              <p className="text-3xl text-[#e26c22]">STANDARD USE</p>
              <p className="text-xl">SECTIONAL DOORS</p>
              <p className="w-[300px] pt-4 pb-4">
                High-speed Rolling door is a kind of channel isolation door,
                used in printing, food, pharmaceutical and other factories, with
                good dustproof, odor proof, quick opening, heat preservation,
                protection and other functions.
              </p>
              <button
                className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none rounded-xl h-10 p-2 w-[35%] shadow-lg bg-[#e26c22] cursor-pointer gap-2"
                onClick={() => {
                  setService(true);
                }}
              >
                SERVICE
                <PiCursorClickFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
