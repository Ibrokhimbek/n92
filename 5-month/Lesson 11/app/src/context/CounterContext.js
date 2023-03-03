import { createContext, useReducer } from "react";
import CounterReducer from "../reducers/CounterReducer";

const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(CounterReducer, 0);
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;

export { CounterContextProvider };
