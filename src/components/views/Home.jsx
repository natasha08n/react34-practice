import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Dashboard } from "./Dashboard";

function Home({ theme, setCurrentTheme }) {
  let location = useLocation();
  console.log("location", location);
  const [showDashboard, setShowDashboard] = useState(true);

  const toggleDashboard = () => {
    setShowDashboard((prev) => !prev);
  };

  const handleChangeTheme = () => {
    setCurrentTheme((prev) => (prev === "#cccccc" ? theme.dark : theme.light));
  };

  return (
    <>
      <div className="App">
        {showDashboard && <Dashboard />}
        <button onClick={toggleDashboard}>
          {showDashboard ? "Hide" : "Show"}
        </button>
      </div>
      <button onClick={handleChangeTheme}>Toggle theme</button>
    </>
  );
}

export { Home };
