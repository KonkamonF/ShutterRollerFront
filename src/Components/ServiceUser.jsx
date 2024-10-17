import React, { useEffect, useState } from "react";
import { ImBin2 } from "react-icons/im";
import useAdmin from "../Contexts/AdminContext";
import useUser from "../Contexts/UserContext";
import { validateRecord } from "../Utils/validator";

export default function ServiceUserComponent({ setPayment, setService }) {
  const { user } = useUser();
  const { apiCreateRecord, apiAllRecord } = useAdmin();
  const [post, setPost] = useState({
    name: "",
    color: "",
    high: "",
    weight: "",
    type: "",
  });
  const [record, setRecord] = useState([]);
  const [error, setError] = useState({
    name: "",
    high: "",
    weight: "",
  });
  const [total, setTotal] = useState([]);
  //get total price

  const allRecord = async () => {
    try {
      const response = await apiAllRecord();
      setRecord(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allRecord();
  }, []);

  const hdChange = (e) => {
    const value = { ...post, [e.target.name]: e.target.value };
    setPost(value);
    console.log(value);
  };

  const submitPayment = async (e) => {
    try {
      e.stopPropagation();
      e.preventDefault();
      console.log(user);
      const isError = validateRecord(post);
      if (isError) {
        setError(isError);
        console.log(isError);
        return console.log(error);
      }
      await apiCreateRecord({ ...post, userId: user.id });
      setService(false);
      setPayment(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 z-50 flex items-center justify-center bg-[#49963640] w-screen h-screen text-white"
        onClick={() => {
          setService(false);
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="border-none pt-[20px] rounded-xl h-auto w-[900px] p-1 bg-[#e26c22]  "
        >
          <div className="flex flex-col gap-4 p-8">
            <div className="flex justify-between">
              <form action="" className="flex gap-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={post.name}
                    name="name"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="RECORD NAME"
                  />
                  <span className="text-sm text-red-800 leading-none">
                    {error.name}
                  </span>
                </div>
                <select className="bg-[#e26c22] border p-1 rounded-lg">
                  {record.map((e, i) => {
                    return <option value="">{e.name}</option>;
                  })}
                </select>
                <button className="border rounded-lg p-1 hover:bg-[#FFFFFF] hover:border-[#FFFFFF] transform transition-transform duration-75 hover:scale-110">
                  <ImBin2 color="#481E14" />
                </button>
              </form>
            </div>

            <form action="" className="flex flex-col gap-4 ">
              <select
                name="type"
                value={post.type}
                className="bg-[#e26c22] border p-1 rounded-lg"
                onChange={hdChange}
              >
                <option value="STANDARD USE">STANDARD USE</option>
                <option value="AUTOMATIC">AUTOMATIC</option>
              </select>

              <div className="flex gap-4 items-center ">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="weight"
                    value={post.weight}
                    className="w-[100px] h-[30px] text-center text-black"
                    placeholder="WEIGHT"
                    onChange={hdChange}
                  />
                  <span className="text-sm text-red-800 leading-none">
                    {error.weight}
                  </span>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="high"
                    value={post.high}
                    className="w-[100px] h-[30px] text-center text-black"
                    placeholder="HIGH"
                    onChange={hdChange}
                  />
                  <span className="text-sm text-red-800 leading-none">
                    {error.high}
                  </span>
                </div>
              </div>

              <div className="flex">
                {/* อยากทำเป็น button */}
                <select
                  name="color"
                  value={post.value}
                  onChange={hdChange}
                  className="bg-[#e26c22] border p-1 rounded-lg"
                >
                  <option value="GRAY" className="hover:bg-amber-500">
                    STANDARD GRAY
                  </option>
                  <option value="BLUE">DEEP BLUE</option>
                  <option value="CREAM">LIGHT CREAM</option>
                </select>
              </div>

              <div className="flex justify-between pt-4">
                <p className="text-xl">TOTAL</p>
                <p className="text-xl">100,000 BATH</p>
              </div>

              <div className="flex gap-4 justify-center items-center flex-col pt-4">
                <button
                  type="button"
                  className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14] bg-[#481E14] p-[4px] w-[200px] rounded-md shadow-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    setService(false);
                    setPayment(true);
                  }}
                >
                  DEPOSIT PAYMENT
                </button>
                <button
                  onClick={submitPayment}
                  className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14]  p-[4px] w-[200px] rounded-md shadow-xl"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
