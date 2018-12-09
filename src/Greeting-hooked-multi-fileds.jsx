import React, { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("Name");
  const [surname, setSurname] = useState("Surname");

  return (
    <form>
      <h2>
        Hello {name} {surname}
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
