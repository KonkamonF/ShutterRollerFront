import React from "react";

export default function AnswerAdmin() {
  return (
    <>
      {
        <div className="absolute top-0 z-50 w-[40%] h-[75%] flex items-center justify-center ">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[20px]  rounded-xl h-auto w-[500px] p-1 bg-[#e26c22]  "
          >
            <div className="text-center flex flex-col gap-4 justify-center">
              <div className="flex justify-center"></div>
              <p>Question : </p>
              <form
                action=""
                className="flex flex-col  gap-4 items-center pt-[10px] "
              >
                <input
                  type="text"
                  className="w-[400px] h-[90px] text-center"
                  placeholder="Answer"
                />
                <button className=" hover:bg-[#ffa064] hover:border-[#ffa064] border p-[4px] w-[200px] rounded-md shadow-xl">
                  ANSWER
                </button>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}
