import React, { useState, useEffect } from "react";

function useDocumentTitle(name, surname) {
  useEffect(
    () => {
      document.title = `Greeting of ${name} ${surname}`;
    },
    [name, surname]
  );
}

export default function Greeting() {
  const [name, setName] = useState("World");
  const [surname, setSurname] = useState("Wide");

  useDocumentTitle(name, surname);

  return (
    <form>
      <h2>
        Hello {name} {surname}!
      </h2>
      <label>
        Enter name:
        <input
          type="text"
          name="name"
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Enter surname:
        <input
          type="text"
          name="surname"
          onChange={event => setSurname(event.target.value)}
        />
      </label>
    </form>
  );
}
