import React, { useState } from "react";

const Counter = () => {
  //? useState()
  const [state, setState] = useState({
    num: 0,
    isMinus: true,
  });

  const style = {
    btn: { fontSize: "30px", margin: "0 auto", display: "block" },
    h1: { textAlign: "center" },
  };

  const increment = () => {
    setState((state) => {
      return state.num === 0
        ? { isMinus: false, num: state.num + 1 }
        : { ...state, num: state.num + 1 };
    });
  };
  
  const decrement = () => {
    setState((state) => {
      if (state.num === 1) {
        return { num: state.num - 1, isMinus: true };
      } else {
        return { ...state, num: state.num - 1 };
      }
    });
  };

  return (
    <div>
      <h1 style={style.h1}>{state.num}</h1>
      <button style={style.btn} onClick={increment}>
        +
      </button>
      <button disabled={state.isMinus} style={style.btn} onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
