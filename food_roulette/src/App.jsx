import { useState } from "react";
import "./App.css";
import Roulette from "./components/Roulette";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Roulette />
      </div>
    </>
  );
}

export default App;
