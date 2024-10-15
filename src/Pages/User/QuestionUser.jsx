import React from "react";
import { ImBin2 } from "react-icons/im";


export default function QuestionUser() {
  return (
    <div className="bg-[#072212] text-white">
      <p className="text-center text-3xl py-8">We're here to help.</p>
      <div className="flex gap-8 pb-8 px-72">
        <div className="bg-[#e26c22bb] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
          <p className="text-xl">Q : Sound insulation and noise reduction</p>
          <p>
            Because the electric sliding door is made of thickened two-layer
            color steel tiles and high-density polyurethane materials, it has a
            very good sound insulation and noise reduction effect.
          </p>
    <div className="flex justify-end">
    <button className=" border rounded-lg w-8 p-1 flex items-center justify-center hover:bg-[#FFFFFF] hover:border-[#FFFFFF] transform transition-transform duration-75 hover:scale-110"><ImBin2 color="#481E14" />
    </button>
    </div>
        </div>
      </div>
      <div className="flex justify-end gap-8 pb-8 px-72">
        <div className="bg-[#39991850] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
          <p className="text-xl">A : Appearance</p>
          <p>
            The polyurethane material layer of the electric sliding door plus
            two layers of hot-dip galvanized color steel tiles, and the surface
            design is embossed
          </p>
        </div>
      </div>
      <div className="flex justify-start gap-8 pb-8 px-72">
        <div className="bg-[#e26c22bb] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
          <p className="text-xl">Q : Sound insulation and noise reduction</p>
          <p>
            Because the electric sliding door is made of thickened two-layer
            color steel tiles and high-density polyurethane materials, it has a
            very good sound insulation and noise reduction effect.
          </p>
          <div className="flex justify-end">
    <button className=" border rounded-lg w-8 p-1 flex items-center justify-center hover:bg-[#FFFFFF] hover:border-[#FFFFFF] transform transition-transform duration-75 hover:scale-110"><ImBin2 color="#481E14" />
    </button>
    </div>
        </div>
      </div>
      <div className="flex justify-end gap-8 pb-8 px-72">
        <div className="bg-[#39991850] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
          <p className="text-xl">A : Appearance</p>
          <p>
            The polyurethane material layer of the electric sliding door plus
            two layers of hot-dip galvanized color steel tiles, and the surface
            design is embossed
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            className="w-[400px] h-[90px] text-center bg-[#072212] shadow-xl border rounded-lg"
            placeholder="QUESTION"
          />
          <select
            name=""
            id=""
            className="bg-[#072212] shadow-xl border rounded-lg p-1 text-center w-[200px]"
          >
            <option value="">PUBLIC</option>
            <option value="">PRIVATE</option>
          </select>
          
          <button className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22] p-1 w-[400px]">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
