import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import IndexScrollAnimations from "./components/IndexScrollAnimations";
import IndexMonsterStage from "./components/IndexMonsterStage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/r3f-study/" element={<Home />} />
        <Route
          path="/r3f-study/scroll-animations"
          element={<IndexScrollAnimations />}
        />
        <Route
          path="/r3f-study/monster-stage"
          element={<IndexMonsterStage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
