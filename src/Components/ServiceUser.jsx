import React, { useEffect, useRef, useState } from "react";
import { ImBin2 } from "react-icons/im";
import useAdmin from "../Contexts/AdminContext";
import useUser from "../Contexts/UserContext";
import { validateRecord } from "../Utils/validator";
import { GrServices } from "react-icons/gr";
import PaymentUser from "./PaymentUser";
import { getAccessToken } from "../Utils/Local-storage";

export default function ServiceUserComponent({
  setService,
  id,
  record,
  setRecord,
}) {
  const [payment, setPayment] = useState(false);
  const { user } = useUser();
  const [isEdit, setIsEdit] = useState(false);
  const {
    apiCreateRecord,
    apiAllRecord,
    apiAllRecordShow,
    apiUpdateProduct,
    apiDeletedProduct,
    apiAllPayment,
    allPayments,
  } = useAdmin();

  const [post, setPost] = useState({
    name: "",
    color: "",
    high: "",
    weight: "",
    type: "MANUAL",
    price: 0,
    payment: [],
  });
  const [error, setError] = useState({
    name: "",
    high: "",
    weight: "",
  });
  const selectRef = useRef(null);

  const allRecord = async () => {
    try {
      const result = await apiAllRecordShow(getAccessToken(), user.id);
      setRecord(result); //
    } catch (err) {
      console.log(err);
    }
  };

  const hdChange = (e) => {
    const value = { ...post, [e.target.name]: e.target.value };
    if (value.type == "MANUAL") {
      value.price = value.weight * value.high * 1800;
    } else {
      value.price = value.weight * value.high * 4500;
    }
    setPost(value);
  };

  const submitUpdateService = async (e) => {
    try {
      await apiUpdateProduct(post);
      await allRecord();
    } catch (err) {
      console.log(err);
    }
  };

  const clickDeleted = async () => {
    try {
      await apiDeletedProduct(post.id);
      setPost({
        name: "",
        color: "",
        high: "",
        weight: "",
        type: "MANUAL",
        price: 0,
      });
      await allRecord();
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
      await apiCreateRecord({ ...post, userId: user?.id });
      allRecord();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiAllPayment();
    allRecord();
  }, []);

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
                    defaultValue={-1}
                    onChange={(e) => {
                      setPost(record[e.target.value]);
                      setIsEdit(true);
                      id(record[e.target.value]?.id);
                    }}
                    className="bg-[#e26c22]  border p-1 rounded-lg"
                  >
                    <option value={-1} disabled>
                      SELECT TO PAY
                    </option>
                    {record?.map((e, i) => {
                      return (
                        <option key={e.id} value={i}>
                          {e.name}
                        </option>
                      );
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

                <div className="flex gap-4 justify-center items-center">
                  <label
                    className={`transform transition-transform duration-75 hover:scale-110 rounded-lg p-2 ${
                      post === "GRAY"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-500 hover:bg-[#5d5d5d] text-black"
                    }`}
                  >
                    <input
                      name="color"
                      type="radio"
                      value="GRAY"
                      checked={post === "GRAY"}
                      onChange={hdChange}
                      className="appearance-none h-5 w-5 border border-gray-400 rounded-full checked:bg-gray-800 checked:border-transparent focus:outline-none transition duration-300"
                    />
                  </label>

                  <label
                    className={`transform transition-transform duration-75 hover:scale-110 rounded-lg p-2 ${
                      post === "BLUE"
                        ? "bg-blue-900 text-white"
                        : "bg-blue-700 hover:bg-[#2740bd] text-black"
                    }`}
                  >
                    <input
                      name="color"
                      type="radio"
                      value="BLUE"
                      checked={post === "BLUE"}
                      onChange={hdChange}
                      className="appearance-none h-5 w-5 border border-blue-400 rounded-full checked:bg-blue-900 checked:border-transparent focus:outline-none transition duration-300"
                    />
                  </label>

                  <label
                    className={`transform transition-transform duration-75 hover:scale-110 rounded-lg p-2 ${
                      post === "CREAM"
                        ? "bg-yellow-500 text-white"
                        : "bg-yellow-300 hover:bg-[#fdf875] text-black"
                    }`}
                  >
                    <input
                      name="color"
                      type="radio"
                      value="CREAM"
                      checked={post === "CREAM"}
                      onChange={hdChange}
                      className="appearance-none h-5 w-5 border border-yellow-400 rounded-full checked:bg-yellow-500 checked:border-transparent focus:outline-none transition duration-300"
                    />
                  </label>
                  <p>COLOR {post.color} SELECTED</p>
                </div>

                <div className="flex justify-between pt-4">
                  <p className="text-xl">TOTAL</p>
                  <p className="text-xl">
                    {Number(post?.price)?.toFixed(2)} BATH
                  </p>
                </div>
                <p>
                  STATUS :{" "}
                  {post?.Payment?.length > 0
                    ? post.Payment[0].statusPayment
                    : ""}
                </p>
                <div className="flex gap-4 items-center flex-col pt-4">
                  {isEdit ? (
                    <button
                      type="button"
                      className="transform transition-transform duration-75 hover:scale-110 border hover:bg-[#481E14] hover:border-[#481E14] bg-[#481E14] p-[4px] w-[200px] rounded-md shadow-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPayment(true);
                        setService(false);
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
