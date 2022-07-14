import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h2>Window</h2>
      <h3>Size: {size}</h3>
    </div>
  );
};
export default ShowHide;
