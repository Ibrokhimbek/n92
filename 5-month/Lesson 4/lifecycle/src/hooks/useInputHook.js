import { useState } from "react";

function useInputHook(initialValue = "") {
  const [state, setState] = useState(initialValue);

  const changeVal = (e) => {
    setState(e.target.value);
  };

  const reset = () => {
    setState("");
  };

  return [state, changeVal, reset];
}

export default useInputHook;
