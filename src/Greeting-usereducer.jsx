import React, { useReducer, useEffect, useRef } from "react";

const initialState = {
  name: "World",
  surname: "Wide",
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    case "setSurname":
      return { ...state, surname: action.surname };
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default function GreetingUsereducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const surnameInput = useRef(null);

  useEffect(
    () => {
      document.title = `Greeting of ${state.name} ${state.surname}`;
    },
    [state.name]
  );
  useEffect(() => {
    let greetings = setInterval(() => dispatch({ type: "increment" }), 2000);
    return () => clearInterval(greetings);
  });

  return (
    <form>
      <h2>
        Hello {state.name} {state.surname}, {state.count} times!
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
    </form>
  );
}
