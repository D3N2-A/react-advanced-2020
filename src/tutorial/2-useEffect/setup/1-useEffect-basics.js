import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect invoked");
    if (count > 0) {
      document.title = `New messages ${count}`;
    } else {
      document.title = "React app";
    }
  }, [count]);
  // const increment = (val) => {
  //   setCount(val + 1);
  // };
  console.log("hello");
  return (
    <>
      <h1>{count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me!
      </button>
      <button
        className="btn"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </>
  );
};

export default UseEffectBasics;
