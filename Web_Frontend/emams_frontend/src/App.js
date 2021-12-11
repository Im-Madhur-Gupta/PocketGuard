import React from "react";
import Background from "./components/Background/Background";
import Nav from './components/Nav/Nav';
import "./App.css";

function App() {
  return (
    <div className="Main">
      <Nav />
      <Background />
    </div>
  );
}

export default App;
