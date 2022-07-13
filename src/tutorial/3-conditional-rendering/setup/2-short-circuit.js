import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h2>Hello world</h2>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {isError && <h3>Error....</h3>}
      {isError ? (
        <p>there is error</p>
      ) : (
        <div>
          <h2>hello boiiii</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
