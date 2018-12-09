import React, { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("World");
  const [surname, setSurname] = useState("Wide");

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
