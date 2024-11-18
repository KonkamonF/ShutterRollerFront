import React from "react";

export default function ShowImage({ setShowPicture, src }) {
  return (
    <>
      <div
        onClick={() => setShowPicture(false)}
        className=" text-[#ffffff] flex  items-center pl-[340px] top-0 z-50 bg-[#49963640] w-screen fixed h-screen"
      >
        <div
          className="border-none px-8 py-8 rounded-xl bg-[#e26c22] shadow-xl flex flex-col "
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-3xl text-center font-bold pb-10">SHOW IMAGE</p>
          <img src={src} alt="" className="w-[250px] rounded-lg" />
        </div>
      </div>
    </>
  );
}
