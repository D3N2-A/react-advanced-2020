import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  return (
    <React.Fragment>
      <h1>{title}</h1>

      <button type="button" className="btn">
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
