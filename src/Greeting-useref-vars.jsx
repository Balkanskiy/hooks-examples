import React, { useReducer, useEffect, useRef } from "react";

const initialState = {
  name: "World",
  surname: "Wide"
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setSurname":
      return { ...state, surname: action.surname };
    default:
      return state;
  }
}

export default function GreetingUsereducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const surnameInput = useRef(null);
  const intervalRef = useRef(null);

  useEffect(
    () => {
      intervalRef.current = "Name added";
    },
    [state.name]
  );

  return (
    <form>
      <h2>
        Hello {state.name} {state.surname}!
      </h2>
      <label>
        Enter name:
        <input
          type="text"
          name="name"
          onChange={event =>
            dispatch({ type: "setName", name: event.target.value })
          }
        />
      </label>
      <label>
        Enter surname:
        <input
          ref={surnameInput}
          type="text"
          name="surName"
          onChange={event =>
            dispatch({ type: "setSurname", name: event.target.value })
          }
        />
      </label>
      <h3>{intervalRef.current}</h3>
    </form>
  );
}
