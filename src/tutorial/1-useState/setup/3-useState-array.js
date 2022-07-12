import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeId = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item">
            <h4 key={id} className="item">
              {name}
            </h4>
            <button
              onClick={() => {
                removeId(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <br />
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear all items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
