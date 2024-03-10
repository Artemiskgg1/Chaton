import React from "react";
import { createContext, useContext, useState } from "react";
export const AuthContext = createContext(
  JSON.parse(localStorage.getItem("chat-user")) || null
);
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = React.useState(null);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
