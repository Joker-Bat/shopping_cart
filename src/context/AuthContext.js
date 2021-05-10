import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider(props) {
  const user = {
    userName: "sakthi0314",
    password: "0314",
  };

  return (
    <AuthContext.Provider value={{ user: user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
