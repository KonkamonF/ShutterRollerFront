import React from "react";
import { PiCursorClickFill } from "react-icons/pi";
import MiddleMainUser from "../../Components/MiddleMainUser";
import { Link } from "react-router-dom";
import Banner from "../../assets/Banner.mp4";
import Bannerr from "../../assets/Bannerr.mp4";

export default function MainHomeUser() {
  return (
    <>
      <div className="bg-[#072212] bg-cover text-white pt-24">
        <div className="flex">
          
          <video autoPlay loop muted>
            <source src={Bannerr} type="video/mp4" />
          </video>

          <div className="flex flex-col justify-center items-center w-[250px] absolute mx-[70%] my-[12%] text-center">
            <p className="text-[#e26c22] text-xl">PONGCHAROEN</p>
            <p className="text-5xl font-bold">BUILD</p>
            <p className="text-5xl font-bold">YOUR</p>
            <p className="text-5xl font-bold">OWN</p>
            <p className="text-[#e26c22] pb-4">SHUTTER ROLLER DOORS SERVICE</p>
            <Link
              to={"/service"}
              className="transform transition-transform duration-75 hover:scale-110 flex items-center border-none w-[100px] rounded-xl h-10 p-2 bg-[#e26c22] cursor-pointer gap-2"
            >
              SERVICE
              <PiCursorClickFill />
            </Link>
          </div>
        </div>
      </div>
      <MiddleMainUser />
    </>
  );
}
