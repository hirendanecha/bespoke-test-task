import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./router";

const App = () => {
  const content = useRoutes(routes);
  return <>{content}</>;
};

export default App;
