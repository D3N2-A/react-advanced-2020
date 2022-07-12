import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    message: "Random message",
  });
  const clickHandler = () => {
    setPerson({ ...person, message: "hello world" });
    if (person.message === "Random message") {
    } else {
      setPerson({ ...person, message: "Random message" });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" type="button" onClick={clickHandler}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
