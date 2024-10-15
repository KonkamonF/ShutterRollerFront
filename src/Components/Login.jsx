import { FaFacebook } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import useUser from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { RiChatSmile3Fill } from "react-icons/ri";

export default function Login({ setIsShowLogin, setIsShowRegister }) {
  const navigate = useNavigate();
  const { apiLogin, role } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const hdChange = (e) => {
    const value = { ...form, [e.target.name]: e.target.value };
    setForm(value);
  };

  const roleRedirect = (role) => {
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  const submitLogin = async (e) => {
    try {
      e.stopPropagation();
      e.preventDefault();
      const role = await apiLogin(form);
      setIsShowLogin(false);
      if (role) roleRedirect(role);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {
        <div
          onClick={() => setIsShowLogin(false)}
          className="fixed top-0 z-50 w-screen h-screen flex items-center bg-[#49963640] justify-center text-white"
        >
          <div className="relative">
            <div className="flex justify-center shadow-xl absolute top-[-75px] right-[40%] bg-[#e26c22] rounded-full p-8">
              <RiChatSmile3Fill size={60} color="#E5E483" />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="border-none pt-[20px] rounded-2xl h-auto w-[500px] p-1 bg-[#e26c22]"
            >
              <div className="text-center flex flex-col gap-4 justify-center">
                <form
                  action=""
                  className="flex flex-col  gap-4 items-center pt-[10px] mt-9"
                  onSubmit={submitLogin}
                >
                  <input
                    type="email"
                    value={form.email}
                    name="email"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="EMAIL"
                  />
                  <input
                    type="password"
                    value={form.password}
                    name="password"
                    onChange={hdChange}
                    className="rounded-lg w-[80%] p-[4px] text-center shadow-md text-[#481E14]"
                    placeholder="PASSWORD"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="transform transition-transform duration-75 hover:scale-110 hover:bg-[#481E14] hover:border-[#481E14] border p-[4px] w-[200px] rounded-md shadow-xl"
                  >
                    LOGIN
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsShowLogin(false);
                      setIsShowRegister(true);
                    }}
                    className="transform transition-transform duration-75 hover:scale-110 hover:bg-[#481E14] hover:border-[#481E14] border p-[4px] w-[200px] rounded-md shadow-xl"
                  >
                    REGISTER
                  </button>
                </form>
                <div className="flex flex-col gap-4 text-sm">
                  OR CONTINUE WITH
                  <div className="flex justify-center gap-4 cursor-pointer pb-8 text-[#481E14]">
                    <FaFacebook
                      size={30}
                      className="transform transition-transform duration-75 hover:scale-110"
                    />
                    <BsInstagram
                      size={30}
                      className="transform transition-transform duration-75 hover:scale-110"
                    />
                    <FaXTwitter
                      size={30}
                      className="transform transition-transform duration-75 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
