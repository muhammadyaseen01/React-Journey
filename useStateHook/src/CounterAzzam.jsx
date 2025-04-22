import React, { useState } from "react";

function CounterAzzam() {
  const [count, setCount] = useState(0); // var , setVar ka func
  function handleClick() {
    setCount(count + 1);
    // setCount(count + 1);

  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>increase</button>
      <br />
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        deccrease
      </button>
    </>
  );
}

export default CounterAzzam;
