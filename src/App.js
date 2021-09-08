import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.js";

export default function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
