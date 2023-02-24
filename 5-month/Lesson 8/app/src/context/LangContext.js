import { createContext, useState } from "react";

const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("uz");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;

export { LangContextProvider };
