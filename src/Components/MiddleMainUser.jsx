import React from "react";
import { PiCursorClickFill } from "react-icons/pi";
import ShutterRoller from "../assets/ShutterRoller.png";
import Shutter from "../assets/Shutter.png";
import { Link } from "react-router-dom";
import P from "../assets/P.png"

export default function MiddleMainUser() {
  return (
    <>
      <div style={{backgroundImage:`url(${P})`}} className="bg-fixed bg-right text-white">
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
            </div>
          </div>
        </div>
        <div className="mx-80 pb-12">
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 flex justify-center">
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
            </div>
          </div>
        </div>
        <div className="text-center p-20">
          <p className="text-4xl">The characteristics of </p>
          <p className="text-5xl text-[#e26c22] font-bold">
            INDUSTRIAL LIFTING DOORS
          </p>
          <p className="text-xl">
            At present, many companies are building processing plants after
            opening stores and selecting locations. <br /> When deploying
            industrial plant gates, they must give priority to the use of
            industrial lift doors
          </p>
        </div>
        <div className="flex justify-around gap-8 pb-8 px-8">
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 flex justify-center flex-col gap-4 w-[90%]">
            <p className="text-2xl text-[#e26c22]">
              Sound insulation and noise reduction
            </p>
            <p>
              Because the electric sliding door is made of thickened two-layer
              color steel tiles and high-density polyurethane materials, it has
              a very good sound insulation and noise reduction effect.
            </p>
          </div>
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 flex justify-center flex-col gap-4 w-[90%]">
            <p className="text-2xl text-[#e26c22]">Versatility</p>
            <p>
              The design of this industrial sliding door is opened vertically
              upwards, hanging on the side of the door leaf square wall does not
              occupy indoor space, and can release the door leaf indoor space to
              the greatest extent.
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-8 pb-36 px-8">
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 flex justify-center flex-col gap-4 w-[90%]">
            <p className="text-2xl text-[#e26c22]">Wind resistance</p>
            <p>
              When the door body has a certain total width, built-in ribs will
              be used to ensure the compressive strength, which can resist
              instantaneous 10 wind speeds.
            </p>
          </div>
          <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 flex justify-center flex-col gap-4 w-[90%]">
            <p className="text-2xl text-[#e26c22]">Appearance</p>
            <p>
              The polyurethane material layer of the electric sliding door plus
              two layers of hot-dip galvanized color steel tiles, and the
              surface design is embossed
            </p>
          </div>
        </div>
        <div className="bg-[#40ff0015] shadow-xl rounded-lg p-8 px-56 flex gap-4 ">
          <div className="flex flex-col justify-center gap-4">
            <p className="text-3xl">Roller Shutter Door</p>
            <p className="w-[50%]">
              Guangdong Hengjie Door Technology Co., Ltd. was established in
              1986, and is a high-quality supplier focusing on the production of
              roller shutter door opener.Roller door openers are efficient and
              reliable devices designed to provide convenience and safety to
              commercial and industrial properties. It has a powerful motor that
              helps people open and close the rolling door easily and it is also
              equipped with a safety mechanism that ensures that the door stops
              when it encounters an obstacle, preventing accidents and damage.
            </p>
            <Link
              to={"/question"}
              className="transform transition-transform duration-75 hover:scale-110 shadow-lg flex items-center border-none w-[120px] rounded-xl h-10 p-2 bg-[#e26c22] cursor-pointer gap-2"
            >
              QUESTION
              <PiCursorClickFill />
            </Link>
          </div>
          <div className="w-[2000px]">
            <img src={Shutter} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
