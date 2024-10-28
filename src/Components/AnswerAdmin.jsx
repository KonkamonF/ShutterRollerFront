import { useState } from "react";
import useAdmin from "../Contexts/AdminContext";

export default function AnswerAdmin({ setAnswer, id }) {
  const [createAnswers, setCreateAnswers] = useState("");
  const { apiAnswer } = useAdmin();

  const submitCreateAnswer = async (e) => {
    e.preventDefault();
    try {
      let body = { answer: createAnswers };
      const createQuestions = await apiAnswer(body, id);
    } catch (err) {
      console.log(err);
    }
  };

  const hdChange = (e) => {
    setCreateAnswers(e.target.value);
  };

  return (
    <>
      <div
        className=" text-[#ffffff] flex items-center pl-[150px] top-0 z-50 bg-[#49963640] w-screen fixed h-screen"
        onClick={() => setAnswer(false)}
      >
        <div className="absolute top-0 z-50 w-[40%] h-[75%] flex items-center justify-center ">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[20px]  rounded-xl h-auto w-[500px] p-1 bg-[#e26c22]  "
          >
            <div className="text-center flex flex-col gap-4 justify-center">
              <p>Question : </p>
              <form
                action=""
                className="flex flex-col  gap-4 items-center pt-[10px] "
                onSubmit={submitCreateAnswer}
              >
                <input
                  type="text"
                  className="w-[400px] h-[90px] text-center text-black"
                  placeholder="Answer"
                  onChange={hdChange}
                />
                <button className=" hover:bg-[#ffa064] hover:border-[#ffa064] border p-[4px] w-[200px] rounded-md shadow-xl">
                  ANSWER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
