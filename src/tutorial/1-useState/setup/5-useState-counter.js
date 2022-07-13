import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increment = (count) => {
    setCount(count + 1);
  };
  const decrement = (count) => {
    setCount(count - 1);
  };
  const complex = (count) => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h1>Count:</h1>
        <h4>{count}</h4>
        <button
          className="btn"
          onClick={() => {
            increment(count);
          }}
        >
          increment
        </button>
        <button
          className="btn"
          onClick={() => {
            decrement(count);
          }}
        >
          decrement
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
      </section>
      <section>
        <h1>Complex Count:</h1>
        <h4>{count}</h4>
        <button
          className="btn"
          onClick={() => {
            complex(count);
          }}
        >
          increment(2s delay)
        </button>

        <button
          className="btn"
          onClick={() => {
            setCount(0);
          }}
        >
          reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
