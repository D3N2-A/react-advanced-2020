import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    console.log(people);
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };
  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
