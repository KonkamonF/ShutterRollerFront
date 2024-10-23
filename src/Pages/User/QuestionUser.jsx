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
      const question = await apiAllQuestion(getAccessToken());
      setAllQuestion(question);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allQuestions();
  }, []);
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
        {allQuestion.map((e, i) => {
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
