import React, { useState, useEffect } from "react";

function Numbers({ getItems }) {
  const [nums, setNums] = useState([]);

  useEffect(() => {
    setNums(getItems(2));
  }, [getItems]);

  return <div>
    {nums.map((num, i) => <p key={i}>{num}</p>)}
  </div>;
}

export default Numbers;
