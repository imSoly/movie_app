import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

export default function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
