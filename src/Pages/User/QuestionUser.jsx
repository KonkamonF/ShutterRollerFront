import React, { useEffect, useState } from "react";
import AskingUser from "../../Components/AskingUser";
import useAdmin from "../../Contexts/AdminContext";
import { getAccessToken } from "../../Utils/Local-storage";

export default function QuestionUser() {
  const { apiAllQuestion } = useAdmin();
  const [allQuestion, setAllQuestion] = useState([]);
  const [question, setQuestion] = useState(false);
  
  const allQuestions = async () => {
    try {
      console.log(getAccessToken());
      const question = await apiAllQuestion(getAccessToken());
      setAllQuestion(question);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   
    allQuestions();
  }, [question]);
  return (
    <>
      {question && <AskingUser setCloseQuestion={setQuestion} />}

      <div className="bg-[#072212] text-white">
        <p className="text-center text-3xl pt-40 pb-14">We're here to help.</p>
        <div className="flex justify-center items-center pb-16">
          <button
            onClick={() => {
              setQuestion(true);
            }}
            className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22] p-1 w-[400px]"
          >
            ASK
          </button>
        </div>
        <div className="flex gap-8 pb-8 px-72">
          <div className="bg-[#e26c22bb] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
            <p className="text-xl">Q : Rolling Shutter Metal High-speed Door</p>
            <p>
              Our Metal Caving Insulation Siding Panel has the following
              characteristics: light dead weight, high mechanical strength,
              excellent shearing resistant performance, strong corrosion
              resistance, high durability, etc. The sandwich panel has excellent
              insulating performance: heat insulation, sound insulation, etc.
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-8 pb-8 px-72">
          <div className="bg-[#39991850] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
            <p className="text-xl">A : Rolling Shutter Metal High-speed Door</p>
            <p>
              The control type for industrial doors can be selected to best suit
              each application. The basic control type is triple button control,
              and options available include radio, pull switch, radar and
              induction loop control.
            </p>
          </div>
        </div>
        {allQuestion?.map((e, i) => {
          return (
            <>
              <div className="flex gap-8 pb-8 px-72">
                <div className="bg-[#e26c22bb] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
                  <p className="text-xl">Q : {e.name}</p>
                  <p>{e.text}</p>
                  <img
                    src={e.questionImg}
                    alt=""
                    className="w-[700px] rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-8 pb-8 px-72">
                <div className="bg-[#39991850] shadow-xl border rounded-lg p-8 flex flex-col gap-4 w-[80%]">
                  <p className="text-xl">A : {e.name}</p>
                  <p>{e.answer}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
