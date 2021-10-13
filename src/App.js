import { useState } from "react";

import "./App.css";
import { Main } from "./components/Main";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const [showMain, setShowMain] = useState(true);

  const toggleMain = () => {
    setShowMain((prev) => !prev);
  };

  return (
    <div className="App">
      {showMain && (
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      )}
      <button onClick={toggleMain}>{showMain ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
