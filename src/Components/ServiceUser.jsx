import React, { useEffect, useRef, useState } from "react";
import { ImBin2 } from "react-icons/im";
import useAdmin from "../Contexts/AdminContext";
import useUser from "../Contexts/UserContext";
import { validateRecord } from "../Utils/validator";
import { GrServices } from "react-icons/gr";
import PaymentUser from "./PaymentUser";

export default function ServiceUserComponent({ setService, id }) {
  const [payment, setPayment] = useState(false);
  const { user } = useUser();
  const [isEdit, setIsEdit] = useState(false);
  const { apiCreateRecord, apiAllRecord, apiUpdateProduct, apiDeletedProduct } =
    useAdmin();
  const [record, setRecord] = useState([]);
  const [post, setPost] = useState({
    name: "",
    color: "",
    high: "",
    weight: "",
    type: "MANUAL",
    price: 0,
  });
  const [error, setError] = useState({
    name: "",
    high: "",
    weight: "",
  });
  const selectRef = useRef(null);

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
    if (value.type == "MANUAL") {
      value.price = ((value.weight * value.high) / 100) * 2000;
    } else {
      value.price = ((value.weight * value.high) / 100) * 3000;
    }
    setPost(value);
  };

  const submitUpdateService = async (e) => {
    try {
      await apiUpdateProduct(post);
    } catch (err) {
      console.log(err);
    }
  };

  const clickDeleted = async () => {
    try {
      await apiDeletedProduct(post.id);
      await allRecord();

      setPost({
        name: "",
        color: "",
        high: "",
        weight: "",
        type: "MANUAL",
        price: 0,
      });

      if (selectRef.current) {
        selectRef.current.value = -1;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitPayment = async (e) => {
    try {
      e.stopPropagation();
      const isError = validateRecord(post);
      if (isError) {
        setError(isError);
        return console.log(error);
      }
      console.log(user);
      await apiCreateRecord({ ...post, userId: user?.id });
      allRecord();
      // setService(true);
      // setPayment(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (payment) {
    return <PaymentUser post={post} setPayment={setPayment} />;
  }

  return (
    <>
      <div
        className="fixed top-0 z-50 flex items-center justify-center bg-[#49963640] w-screen h-screen text-white"
        onClick={() => {
          setService(false);
        }}
      >
        <div className="relative">
          <div className="flex justify-center shadow-xl absolute top-[-75px] left-[38%] bg-[#e26c22] rounded-full p-8">
            <GrServices size={60} color="#E5E483" />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[40px] rounded-xl h-auto w-[500px] p-1 bg-[#e26c22] flex justify-center"
          >
            <div className="flex flex-col gap-4 p-8 ">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={post.name}
                      name="name"
                      onChange={hdChange}
                      className="rounded-lg p-[4px] text-center shadow-md text-[#481E14]"
                      placeholder="RECORD NAME"
                    />
                    <span className="text-sm text-red-800 leading-none">
                      {error.name}
                    </span>
                  </div>

                  <select
                    ref={selectRef}
                    onChange={(e) => {
                      setPost(record[e.target.value]);
                      setIsEdit(true);
                      id(record[e.target.value]?.id);
                    }}
                    className="bg-[#e26c22]  border p-1 rounded-lg"
                  >
                    <option value={-1} disabled selected>
                      SELECT TO PAY
                    </option>
                    {record?.map((e, i) => {
                      return <option value={i}>{e.name}</option>;
                    })}
                  </select>

                  <button
                    onClick={(e) => clickDeleted(e.id)}
                    className="border rounded-lg p-1 hover:bg-[#FFFFFF] hover:border-[#FFFFFF] transform transition-transform duration-75 hover:scale-110"
                  >
                    <ImBin2 color="#481E14" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 ">
                <select
                  name="type"
                  value={post.type}
                  className="bg-[#e26c22] border p-1 rounded-lg"
                  onChange={hdChange}
                >
                  <option value="MANUAL">STANDARD USE</option>
                  <option value="AUTOMATIC">AUTOMATIC</option>
                </select>

                <div className="flex gap-4 items-center justify-between">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="weight"
                      value={post.weight}
                      className=" h-[30px] text-center text-black rounded-lg"
                      placeholder="Width per square meter"
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
                      className="h-[30px] text-center text-black rounded-lg"
                      placeholder="Height per square meter"
                      onChange={hdChange}
                    />
                    <span className="text-sm text-red-800 leading-none">
                      {error.high}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <label className="transform transition-transform duration-75 hover:scale-110  hover:bg-[#5d5d5d] rounded-lg p-2 bg-gray-500">
                    <input
                      name="color"
                      type="radio"
                      value="GRAY"
                      checked={post === "GRAY"}
                      onChange={hdChange}
                    />
                  </label>
                  <label className="transform transition-transform duration-75 hover:scale-110  hover:bg-[#2740bd] rounded-lg p-2 bg-blue-700">
                    <input
                      name="color"
                      type="radio"
                      value="BLUE"
                      checked={post === "BLUE"}
                      onChange={hdChange}
                    />
                  </label>
                  <label className="transform transition-transform duration-75 hover:scale-110  hover:bg-[#fdf875] rounded-lg p-2 bg-yellow-300">
                    <input
                      name="color"
                      type="radio"
                      value="CREAM"
                      checked={post === "CREAM"}
                      onChange={hdChange}
                    />
                  </label>
                </div>

                <div className="flex justify-between pt-4">
                  <p className="text-xl">TOTAL</p>
                  <p className="text-xl">
                    {Number(post?.price)?.toFixed(2)} BATH
                  </p>
                </div>

                <div className="flex gap-4 items-center flex-col pt-4">
                  {isEdit ? (
                    <button
                      type="button"
                      className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14] bg-[#481E14] p-[4px] w-[200px] rounded-md shadow-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        // setService(false);
                        setPayment(true);
                      }}
                    >
                      DEPOSIT PAYMENT
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {isEdit ? (
                    <button
                      onClick={() => {
                        submitUpdateService();
                      }}
                      className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14]  p-[4px] w-[200px] rounded-md shadow-xl"
                    >
                      SAVE
                    </button>
                  ) : (
                    <button
                      onClick={submitPayment}
                      className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14]  p-[4px] w-[200px] rounded-md shadow-xl"
                    >
                      CREATE
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
