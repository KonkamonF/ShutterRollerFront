import React from "react";
import Map from "../../assets/Map.png";
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLine, FaMapMarkedAlt, FaFacebookSquare } from "react-icons/fa";

export default function ContactUser({ setContact }) {
  return (
    <>
      <div
        onClick={() => setContact(false)}
        className="fixed top-0 z-50 flex items-center justify-center bg-[#49963640] w-screen h-screen text-white"
      >
        <div className="relative">
          <div className="flex justify-center shadow-xl absolute top-[-75px] left-[42%] bg-[#e26c22] rounded-full p-8">
            <FaMapLocationDot size={60} color="#E5E483" />
          </div>
          <div
            className="border-none pt-14 pl-8 pb-8 h-auto rounded-xl w-[990px] bg-[#e26c22] shadow-xl flex gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center flex flex-col">
              <div className="flex justify-around gap-8">
                <div className="flex flex-col text-start">
                  <p className="text-3xl text-center font-bold">CONTACT US</p>
                  <p className="text-lg text-center pt-8 pb-4 font-bold">
                    ADDRESS
                  </p>
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
                      <a
                        href="https://line.me/ti/p/tMKGzcijma"
                        className="hover:bg-[#08c60a] rounded-md transform transition-transform duration-75 hover:scale-110"
                      >
                        <FaLine size={40} />
                      </a>
                      <a
                        href="https://www.facebook.com/pongcharoen89/"
                        className="hover:bg-[#1a68f8] rounded-md transform transition-transform duration-75 hover:scale-110"
                      >
                        <FaFacebookSquare size={40} />
                      </a>
                      <a
                        href="https://www.google.com/maps/place/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%AA%E0%B8%B2%E0%B8%81%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81+%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%A1%E0%B9%89%E0%B8%A7%E0%B8%99%E0%B8%A3%E0%B8%B5%E0%B9%82%E0%B8%A1%E0%B8%97+%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B9%82%E0%B8%99%E0%B8%A1%E0%B8%B1%E0%B8%95%E0%B8%B4+%E0%B8%9E%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A3/@16.5030958,100.4696669,17z/data=!3m1!4b1!4m6!3m5!1s0x30dff1588228017d:0x4cfa150ffe92031e!8m2!3d16.5030907!4d100.4722418!16s%2Fg%2F11rwmb97sk?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D"
                        className="hover:bg-[#ff4428] rounded-md transform transition-transform duration-75 hover:scale-110"
                      >
                        <FaMapMarkedAlt size={40} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img src={Map} alt="" className="rounded-lg shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
