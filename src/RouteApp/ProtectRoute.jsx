import React, { useState } from "react";
import { getAccessToken } from "../Utils/Local-storage";
import { getUser } from "../api/apiUser";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ element, allow }) {
  const [isAllowed, setIsAllowed] = useState(null);
  const token = getAccessToken();
  const checkRole = async () => {
    try {
      const response = await getUser(token);
      const role = response.data.getUser.role;
      if (allow.includes(role)) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    } catch (err) {
      setIsAllowed(false);
    }
  };
  checkRole();
  if (isAllowed === null) {
    return <div>LOADING...</div>;
  }
  if (!isAllowed) {
    return <Navigate to={"/unauthorization"} />;
  }
  return element;
}
