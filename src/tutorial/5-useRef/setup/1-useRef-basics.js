import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(refContainer.current.value);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <input type="text" ref={refContainer} />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UseRefBasics;
