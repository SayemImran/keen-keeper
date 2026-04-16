"use client";

import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

  const addLog = (info) => {
    setLogs((prev) => [...prev, info]);
  };

  return (
    <ContactContext.Provider value={{ logs, addLog }}>
      {children}
    </ContactContext.Provider>
  );
};

// custom hook (optional but clean)
export const useContact = () => useContext(ContactContext);
