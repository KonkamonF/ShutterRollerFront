import React, { useRef, useState } from "react";
import useAdmin from "../Contexts/AdminContext";

export default function AskingUser({ setCloseQuestion }) {
  const { apiCreateQuestion } = useAdmin();
  const [upload, setUpload] = useState(null);
  const file = useRef();
  const [question, setQuestion] = useState({
    title: "",
    detail: "",
  });

  const hdChange = (e) => {
    const value = { ...question, [e.target.name]: e.target.value };
    setQuestion(value);
    console.log(value);
  };

  const submitQuestion = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const payload = new FormData();
    payload.append("questionImg", upload);
    payload.append("detail", question.detail);
    payload.append("title", question.title);
  
    await apiCreateQuestion(payload);
  };

  return (
    <>
      <div
        onClick={() => setCloseQuestion(false)}
        className=" text-[#ffffff] flex justify-center items-center top-0 z-50 bg-[#49963640] w-screen fixed h-screen"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="border-none py-16 px-16 rounded-xl bg-[#e26c22] shadow-xl flex gap-12"
        >
          <form
            action=""
            className="flex flex-col justify-center items-center gap-4"
            onSubmit={submitQuestion}
          >
            <input
              type="text"
              name="title"
              onChange={hdChange}
              placeholder="TITLE"
              className="text-center w-[400px] rounded-lg bg-[#481E14]"
            />
            <div>
              <textarea
                type="text"
                name="detail"
                className="textarea textarea-ghost w-[400px] h-[90px] text-center bg-[#481E14] shadow-xl border rounded-lg"
                placeholder="QUESTION"
                onChange={hdChange}
              />
            </div>
            <input
              ref={file}
              type="file"
              accept="image/*"
              name="questionImg"
              className="rounded-xl border hidden"
              onChange={(e) => {
                if (e.target.files[0]) {
                  setUpload(e.target.files[0]);
                }
              }}
            />
            {upload ? (
              <div className="w-[500px]">
                <img src={URL.createObjectURL(upload)} />
              </div>
            ) : null}

            <div className="flex gap-8">
              <div
                className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#481E14] hover:border-[#481E14] p-1"
                onClick={() => file.current.click()}
              >
                ADD PICTURE
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuestion(true);
                    setUpload(null);
                    file.current.value = "";
                  }}
                  className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#481E14] hover:border-[#481E14] p-1"
                  role="button"
                >
                  CANCEL
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label for="toggle">PUBLIC :</label>
              <input type="checkbox" id="toggle" class="hidden" />
              <div className="relative">
                <div className="block bg-gray-300 w-12 h-6 rounded-full"></div>
                <div className="dot absolute left-0 top-0 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            </div>
            <button className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#481E14] hover:border-[#481E14] p-1 w-[400px]">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
