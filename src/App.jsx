import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "../public/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to Vite + React</h1>
      <h2>Built by Sadman Sami 🚀</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} {count === 1 ? "time" : "times"}
        </button>
        <p>
          Modify <code>src/App.jsx</code> and see live updates instantly!
        </p>
      </div>
      <p className="read-the-docs">
        Dive deeper into <strong>Vite</strong> and <strong>React</strong> by
        clicking the logos above.
      </p>
    </>
  );
}

export default App;
