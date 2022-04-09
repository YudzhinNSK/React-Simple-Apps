import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({
  children
}) => {

  const [user, setUser] = useState(null);

  const logIn = (user, callback) => {
    setUser(user)
    callback()
  }

  const logOut = (callback) => {
    setUser(null)
    callback()
  }

  const data = {user, logIn, logOut}

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}