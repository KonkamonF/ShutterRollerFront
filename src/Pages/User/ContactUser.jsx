import React from "react";
import Map from "../../assets/Map.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLine, FaMapMarkedAlt, FaFacebookSquare } from "react-icons/fa";

export default function ContactUser({ setContact }) {
  return (
    <>
      {
        <div
          onClick={() => setContact(false)}
          className=" text-[#ffffff] flex justify-center items-center top-0 z-50 bg-[#49963640] w-screen fixed h-screen"
        >
          <div
            className="border-none pt-8 pl-8 pb-8 rounded-xl w-[990px] bg-[#e26c22] shadow-xl flex gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center flex flex-col">
              <div className="flex justify-around gap-8">

              <div className="flex flex-col text-start">
                <p className="text-3xl text-center font-bold">CONTACT US</p>
                <p className="text-lg text-center pt-8 pb-4 font-bold">ADDRESS</p>
                <p>
                  73/5 Moo 14 <br /> Subdistrict SAKLEK <br /> District SAKLEK
                  <br />
                  Provence PHITCHIT 66160
                </p>
                <div>
                  <p className="text-lg text-center pt-8 pb-4 font-bold">
                    CONTACT INFORMATION
                  </p>
                  <p className="flex gap-4 pb-2">
                    <FaPhoneVolume size={20} />
                    081-9733078
                  </p>
                  <p className="flex gap-3">
                    <MdMarkEmailUnread size={25} />
                    pongcharoen11@hotmail.com
                  </p>
                </div>
                <div>
                  <p className="text-lg text-center pt-8 pb-4 font-bold">
                    FOLLOW US
                  </p>
                  <div className="flex gap-4 justify-center ">
                    <p className="hover:bg-[#08c60a] rounded-md transform transition-transform duration-75 hover:scale-110">
                      <FaLine size={40} />
                    </p>
                    <p className="hover:bg-[#1a68f8] rounded-md transform transition-transform duration-75 hover:scale-110">
                      <FaFacebookSquare size={40} />
                    </p>
                    <p className="hover:bg-[#ff4428] rounded-md transform transition-transform duration-75 hover:scale-110">
                      <FaMapMarkedAlt size={40} />
                    </p>
                  </div>
                </div>
              </div>
           <div className="flex justify-center items-center"> 
            <img src={Map} alt="" className="rounded-lg shadow-2xl" /></div>
            </div>
              </div>
          </div>
        </div>
      }
    </>
  );
}
