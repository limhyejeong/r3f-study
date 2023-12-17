import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollAnimations from "./components/experiences/scroll_animations/ScrollAnimations";
import MonsterStage from "./components/experiences/monster-stage/MonsterStage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/r3f-study/" />} />
        <Route path="/r3f-study/" element={<Home />} />
        <Route
          path="/r3f-study/scroll-animations"
          element={<ScrollAnimations />}
        />
        <Route path="/r3f-study/monster-stage" element={<MonsterStage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
