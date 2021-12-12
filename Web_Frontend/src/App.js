import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Background from "./components/Background/Background";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import DataView from "./components/Dataview/Dataview";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  return (
    <div className="app">
      <Nav />
      {/* {!isLoggedIn && <Navigate to="/login" />} */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Background /> <DataView />
            </div>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Signup isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
