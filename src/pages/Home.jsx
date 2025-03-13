import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home</h1>
      <h1>QuizzConn</h1>
      <h2>Front-end</h2>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Incrementar</button>
        <span>{count}</span>
      </div>
    </div>
  );
}

export default Home;
