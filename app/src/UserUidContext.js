import React, { useContext } from "react";

export const UserUidContext = React.createContext(null);
export const useUid = () => useContext(UserUidContext);
