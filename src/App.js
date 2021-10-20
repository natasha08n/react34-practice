import { useState, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./components/views/Home";
import { Dashboard } from "./components/views/Dashboard";
import { Users } from "./components/views/Users";
import { User } from "./components/views/User";
import { UsersForm } from "./components/views/UsersForm";
import { NotFound } from "./components/views/NotFound";
import { Menu } from "./components/Menu"

const theme = {
  light: "#cccccc",
  dark: "#000000",
};

export const ThemeContext = createContext(theme.dark);

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme.dark);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/users" component={Users} exact />
        <Route path="/users/:id" component={User} exact />
        <Route path="/users-form" component={UsersForm} exact />
        <Route component={NotFound} exact />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
