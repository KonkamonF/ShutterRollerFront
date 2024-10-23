import React, { useEffect, useState } from "react";
import AnswerAdmin from "../../Components/AnswerAdmin";
import useAdmin from "../../Contexts/AdminContext";
import { getAccessToken } from "../../Utils/Local-storage";
import ShowImage from "../../Components/ShowImage";

export default function QuestionAdmin() {
  const { apiAllQuestion, apiDeletedQuestion } = useAdmin();
  const [answer, setAnswer] = useState(false);
  const [question, setQuestion] = useState(null);
  const [showPicture, setShowPicture] = useState(false);
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);

  const allQuestion = async () => {
    try {
      const questions = await apiAllQuestion(getAccessToken());
      setQuestion(questions);
    } catch (err) {
      console.log(err);
    }
  };
  const hdGetId = async (itemsId) => {
    setId(itemsId.id);
  };
  const clickedDeleted = async () => {
    try {
      await apiDeletedQuestion(question.id);
      allQuestion();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allQuestion();
  }, []);

  return (
    <>
      {showPicture && <ShowImage setShowPicture={setShowPicture} src={image} />}
      {answer && <AnswerAdmin setAnswer={setAnswer} id={id} />}
      <div className="w-full text-white ">
        <form action="" className="py-4 flex justify-center">
          <input
            type="text"
            className="bg-[#420516] rounded-lg border h-8 p-2 mr-4"
            placeholder="SEARCH"
          />
          <button className="rounded-lg h-8 p-2 hover:bg-[#e26c22] hover:border-[#e26c22] cursor-pointer flex justify-center items-center border">
            SEARCH
          </button>
        </form>
        <p className="bg-[#86003C] text-3xl font-bold rounded-lg p-2 text-center">
          USER FQA
        </p>
        <table className=" text-center w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-[#e26c22]">
              <th className="border-collapse border p-2">ID</th>
              <th className="border-collapse border p-2">FIRSTNAME</th>
              <th className="border-collapse border p-2">PHONE</th>
              <th className="border-collapse border p-2">ADDRESS</th>
              <th className="border-collapse border p-2">TITLE QUESTION</th>
              <th className="border-collapse border p-2">QUESTION</th>
              <th className="border-collapse border p-2">IMAGE</th>
              <th className="border-collapse border p-2">ANSWER</th>
              <th className="border-collapse border p-2">ANSWER</th>
              <th className="border-collapse border p-2"></th>
            </tr>
          </thead>
          <tbody>
            {question &&
              question.map((e, i) => {
                return (
                  <tr className="bg-[#420516]">
                    <td className="border-collapse border p-2">{i + 1}</td>
                    <td className="border-collapse border p-2">
                      {e.user.firstName}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.user.phone}
                    </td>
                    <td className="border-collapse border p-2">
                      {e.user.address}
                    </td>
                    <td className="border-collapse border p-2">{e.name}</td>
                    <td className="border-collapse border p-2">{e.text}</td>
                    <td className="border-collapse border p-2">
                      <button
                        className="bg-[#420516] border p-1 rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22]"
                        onClick={() => {
                          setShowPicture(true);
                          setImage(e.questionImg);
                        }}
                      >
                        SHOW IMAGE
                      </button>
                    </td>
                    <td className="border-collapse border p-2">
                      <button
                        className="bg-[#420516] border p-1 rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22]"
                        onClick={() => {
                          hdGetId(e);
                          setAnswer(true);
                        }}
                      >
                        ANSWER
                      </button>
                    </td>
                    <td className="border-collapse border p-2">{e.answer}</td>
                    <td className="border-collapse border p-2">
                      <button
                        onClick={(e) => clickedDeleted(e.id)}
                        className="bg-[#420516] border p-1 rounded-lg hover:bg-[#e26c22] hover:border-[#e26c22]"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
