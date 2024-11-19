import React, { useEffect, useRef, useState } from "react";
import useAdmin from "../Contexts/AdminContext";
import { getAccessToken } from "../Utils/Local-storage";
import { validateQuestion } from "../Utils/validator";
import { FaRegQuestionCircle } from "react-icons/fa";

const initialInput = {
  title: "",
  detail: "",
  statusQuestion: "",
};

export default function AskingUser({ setCloseQuestion }) {
  const { apiCreateQuestion, apiAllQuestion } = useAdmin();
  const token = getAccessToken();
  const [upload, setUpload] = useState(null);
  const file = useRef();
  const [question, setQuestion] = useState(initialInput);
  const [checkPublic, setCheckPublic] = useState(true);
  const [allQuestion, setAllQuestion] = useState([]);
  const [error, setError] = useState({
    title: "",
    detail: "",
  });

  const hdChange = (e) => {
    const value = { ...question, [e.target.name]: e.target.value };
    setQuestion(value);
    console.log(value);
  };

  const submitQuestion = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();

      const isError = validateQuestion(question);
      if (isError) {
        setError(isError);
        return console.log(error);
      }

      const payload = new FormData();
      payload.append("questionImg", upload);
      payload.append("detail", question.detail);
      payload.append("title", question.title);
      payload.append("statusQuestion", checkPublic);

      await apiCreateQuestion(payload);

      setQuestion(initialInput);
      setUpload(null);
      setCloseQuestion(false)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (e) => {
    if (!checkPublic) {
      setQuestion((prev) => ({ ...prev, ["statusQuestion"]: "PUBLIC" }));
    } else {
      setQuestion((prev) => ({ ...prev, ["statusQuestion"]: "PRIVATE" }));
    }
    setCheckPublic((prev) => !prev);
  };

  const fetchAllQuestion = async () => {
    const result = await apiAllQuestion(token);
    setAllQuestion(result);
  };

  useEffect(() => {
    fetchAllQuestion();
  }, []);

  return (
    <>
      <div
        onClick={() => setCloseQuestion(false)}
        className=" text-[#ffffff] flex justify-center items-center top-0 z-50 bg-[#49963640] w-screen fixed h-screen"
      >
        <div className="relative">
          <div className="flex justify-center shadow-xl absolute top-[-75px] left-[38%] bg-[#e26c22] rounded-full p-8">
            <FaRegQuestionCircle size={60} color="#E5E483" />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="border-none py-20 px-16 rounded-xl bg-[#e26c22] shadow-xl flex gap-12"
          >
            <form
              action=""
              className="flex flex-col justify-center items-center gap-4"
              onSubmit={submitQuestion}
            >
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="title"
                  onChange={hdChange}
                  placeholder="TITLE"
                  className="text-center w-[400px] border rounded-lg bg-[#481E14] p-1"
                  value={question.title}
                />
                <span className="text-sm text-red-800 leading-none">
                  {error.title}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  type="text"
                  name="detail"
                  className="textarea textarea-ghost w-[400px] h-[90px] text-center bg-[#481E14] shadow-xl border rounded-lg"
                  placeholder="QUESTION"
                  onChange={hdChange}
                  value={question.detail}
                />
                <span className="text-sm text-red-800 leading-none">
                  {error.detail}
                </span>
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
                  onClick={(e) => {
                    file.current.click();
                    e.stopPropagation();
                  }}
                >
                  ADD PICTURE
                </div>
                <div>
                  <button
                    type="button"
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

              <div>
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer flex-col px-4"
                  htmlFor="flexSwitchCheckDefault"
                >
                  PUBLIC :
                </label>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] 
  before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full 
  before:bg-transparent before:content-[''] 
  after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full 
  after:border-none after:bg-gray-300
  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
  checked:bg-green-800 checked:after:ml-[1.0625rem] checked:after:bg-green-300 
  hover:cursor-pointer focus:outline-none 
  focus:before:scale-100 focus:before:opacity-[0.12] 
  focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
  dark:bg-gray-500 dark:checked:bg-green-800"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={checkPublic}
                  onChange={handleCheckboxChange}
                />
              </div>
              <button
                type="submit"
                className="transform transition-transform duration-75 hover:scale-110 shadow-lg border rounded-lg hover:bg-[#481E14] hover:border-[#481E14] p-1 w-[400px]"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
