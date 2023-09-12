// Context.js
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [lastItem, setLastItem] = useState(null); // Initialize lastItem as null

  return (
    <MyContext.Provider value={{ lastItem, setLastItem }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyValue() {
  return useContext(MyContext);
}
