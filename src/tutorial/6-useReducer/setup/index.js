import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please Enter Value",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => {
     return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Removed",
    };
  }
  return state;
};
const defaultState = {
  people: [...data],
  isModalOpen: false,
  modalContent: "hello world",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                remove(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
