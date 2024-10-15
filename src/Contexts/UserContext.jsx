import { createContext, useContext, useState } from "react";
import { register, login, allUser } from "../api/apiUser";
import { toast } from "react-toastify";
import { removeAccessToken, setAccessToken } from "../Utils/Local-storage";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [role, setRole] = useState(null);

  const apiRegister = async (form) => {
    try {
      console.log(form);
      const response = await register(form);
      toast.success("REGISTER SUCCESS");
    } catch (err) {
      toast.error("TRY REGISTER AGAIN");
    }
  };

  const apiLogin = async (form) => {
    try {
      const response = await login(form);
      console.log(response);
      toast.success("LOGIN SUCCESS");
      setAccessToken(response.data.token);
      setRole(response.data.role);
      return response.data.role;
    } catch (err) {
      console.log(err);
      toast.error("TRY LOGIN AGAIN");
    }
  };

  const apiAllUser = async () => {
    try {
      const response = await allUser();
      return response.data.allUser;
    } catch (err) {
      console.log(err);
    }
  };

  const logOut = async () => {
    try {
      removeAccessToken();
      setRole(null);
      toast.success("LOGOUT SUCCESS");
    } catch (err) {
      toast.error("TRY LOGOUT AGAIN");
    }
  };

  const value = {
    apiRegister,
    apiLogin,
    apiAllUser,
    role,
    logOut,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default function useUser() {
  return useContext(UserContext);
}
