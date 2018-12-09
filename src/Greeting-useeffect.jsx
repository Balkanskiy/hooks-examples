import React, { useState, useEffect } from "react";

export default function Greeting() {
  const [name, setName] = useState("World");
  const [surName, setSurname] = useState("Wide");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let greetings = setInterval(() => setCount(count + 1), 2000);
    return () => clearInterval(greetings);
  });

  useEffect(
    () => {
      document.title = `Greeting of ${name} ${surName}`;
    },
    [name]
  );

  return (
    <form>
      <h2>
        Hello {name} {surName}, {count} times!
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
          name="surName"
          onChange={event => setSurname(event.target.value)}
        />
      </label>
    </form>
  );
}
