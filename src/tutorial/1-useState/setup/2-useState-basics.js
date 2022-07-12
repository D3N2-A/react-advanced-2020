import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // useState()[0] = "gg";
  // console.log(value, handler);
  const [title, setTitle] = useState("random text");
  const handleClick = () => {
    if (title === "random text") {
      setTitle("Hello world");
    } else {
      setTitle("random text");
    }
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Click to change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
