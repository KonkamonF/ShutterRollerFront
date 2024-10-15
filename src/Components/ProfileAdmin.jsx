import React from "react";

export default function ProfileAdmin() {
  return (
    <>
      {
        <div className="absolute top-0 z-50 w-[80%] h-[100%] flex items-center justify-center ">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="border-none pt-[20px]  rounded-xl h-auto w-[500px] p-1 bg-[#e26c22]  "
          >
            <div className="text-center flex flex-col gap-4 justify-center">
              <div className="flex justify-center"></div>
              <form
                action=""
                className="flex flex-col  gap-4 items-center pt-[10px] "
              >
                <input
                  type="text"
                  name="firstName"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="FIRSTNAME"
                />
                <input
                  type="text"
                  name="lastName"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="LASTNAME"
                />
                <input
                  type="text"
                  name="phone"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="PHONE"
                />
                <input
                  type="text"
                  name="address"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="ADDRESS"
                />
                <input
                  type="email"
                  name="email"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="E-MAIL"
                />
                <input
                  type="password"
                  name="password"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="CHANGE PASSWORD"
                />
                <input
                  type="password"
                  name="password"
                  className="rounded-lg w-[80%] p-[4px] text-center shadow-m"
                  placeholder="CONFIRM PASSWORD"
                />
                <button className=" hover:bg-[#ffa064] hover:border-[#ffa064] border p-[4px] w-[200px] rounded-md shadow-xl">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}
