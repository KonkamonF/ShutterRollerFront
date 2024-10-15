import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLine, FaMapMarkedAlt, FaFacebookSquare } from "react-icons/fa";

export default function BottomBar() {
  return (
    <>
      <div className="bg-[#072212] text-white pb-4 pt-52">
        <div className="flex justify-around pb-8">
          <div className="">
            <p className="text-lg text-center pb-2">ADDRESS</p>
            <p className="text-sm">
              73/5 MOO 14 <br /> SUBDISTRICT SAKLEK <br /> DISTRICT SAKLEK{" "}
              <br />
              PROVENCE PHITCHIT 66160{" "}
            </p>
          </div>
          <div>
            <p className="text-lg text-center pb-2">CONTACT INFORMATION</p>
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
            <p className="text-lg text-center pb-2">FOLLOW US</p>
            <div className="flex gap-4">
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
        <p className="text-xs text-center">
          All rights reserved. Codecapm18 © 2024
        </p>
      </div>
    </>
  );
}
