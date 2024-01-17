import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./Screens/Login/LoginScreen";
import RegisterScreen from "./Screens/Register/RegisterScreen";
import WelcomeScreen from "./Screens/Welcome/WelcomeScreen.jsx";

import "./styles/global.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
