import React from "react";
import Background from "./components/Background/Background";
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import DataView from "./components/Dataview/Dataview";
import "./App.css";

function App() {
  return (
    <div className="Main">
      {/* <Nav /> */}
      <Background />
      {/* <Login />
      <Signup /> */}
      <DataView />
      <Footer />
    </div>
  );
}

export default App;
