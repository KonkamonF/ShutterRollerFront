import React, { useState } from "react";
import AnswerAdmin from "../../Components/AnswerAdmin";

export default function QuestionAdmin() {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      {answer && <AnswerAdmin setAnswer={setAnswer} />}
      <div className="w-full text-white ">
        <form action="" className="pt-4 flex justify-center">
          <input
            type="text"
            className="bg-[#072212] rounded-lg border h-8 p-2 mr-4"
            placeholder="SEARCH"
          />
          <button className="rounded-lg h-8 p-2 hover:bg-[#e26c22] hover:border-[#e26c22] cursor-pointer flex justify-center items-center border">
            SEARCH
          </button>
        </form>
        <table className=" text-center w-full mt-4 border-collapse">
          <tr className="bg-[#e26c22]">
            <th className="border-collapse border p-2">ID</th>
            <th className="border-collapse border p-2">FIRSTNAME</th>
            <th className="border-collapse border p-2">PHONE</th>
            <th className="border-collapse border p-2">ADDRESS</th>
            <th className="border-collapse border p-2">PAYMENT</th>
            <th className="border-collapse border p-2">QUESTION</th>
            <th className="border-collapse border p-2">ANSWER</th>
            <th className="border-collapse border p-2">REPLY</th>
          </tr>
          <tr className="bg-[#072212]">
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2"></td>
            <td className="border-collapse border p-2">
              <button
                className="bg-[#072212] border p-1 rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22]"
                onClick={() => {
                  setAnswer(true);
                }}
              >
                ANSWER
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
