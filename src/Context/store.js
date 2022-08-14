import { createContext, useState } from "react";

export const CounterContext = createContext();

const ContextProvider = (props) => {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };

  const decrement = () => {
    setVal(val - 1);
  };

  const store = {
    num: val,
    add: increment,
    subtract: decrement
  };

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default ContextProvider;
