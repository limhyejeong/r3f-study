import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import IndexScrollOffice from "./components/scroll-office/IndexScrollOffice";
import IndexMonsterStage from "./components/monster-stage/IndexMonsterStage";
import IndexAnimateModel from "./components/animate-model/IndexAnimateModel";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scroll-office" element={<IndexScrollOffice />} />
        <Route path="/monster-stage" element={<IndexMonsterStage />} />
        <Route path="/animate-model" element={<IndexAnimateModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
