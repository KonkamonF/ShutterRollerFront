import { createContext, useContext, useEffect, useState } from "react";
import { register, login, allUser, getUser } from "../api/apiUser";
import { toast } from "react-toastify";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../Utils/Local-storage";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = getAccessToken();
    if (!user && token) {
      userDetail(token);
    }
  }, []);

  const userDetail = async (token) => {
    try {
      const response = await getUser(token);
      setUser(response.data.getUser);
      setRole(response.data.getUser.role);
    } catch (err) {
      console.log(err);
    }
  };

  const apiRegister = async (form) => {
    try {
      const response = await register(form);
      toast.success("REGISTER SUCCESS");
    } catch (err) {
      toast.error("TRY REGISTER AGAIN");
    }
  };

  const apiLogin = async (form) => {
    try {
      const response = await login(form);
      toast.success("LOGIN SUCCESS");
      setAccessToken(response.data.token);
      setRole(response.data.role);
      userDetail(response.data.token);
      return response.data.role;
    } catch (err) {
      console.log(err);
      toast.error("TRY LOGIN AGAIN");
    }
  };

  const apiAllUser = async (token) => {
    try {
      const response = await allUser(token);
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
    userDetail,
    role,
    logOut,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default function useUser() {
  return useContext(UserContext);
}
