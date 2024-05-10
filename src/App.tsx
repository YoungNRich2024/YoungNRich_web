import React from "react";
import { Routes, Route } from "react-router-dom";
import OrientationStyled from "./styles/OrientationStyled";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <OrientationStyled>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </OrientationStyled>
  );
}

export default App;
