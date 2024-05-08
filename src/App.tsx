import React from "react";
import { Routes, Route } from "react-router-dom";
import OrientationStyled from "./styles/OrientationStyled";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <OrientationStyled>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </OrientationStyled>
  );
}

export default App;
