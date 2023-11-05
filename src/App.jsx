import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollAnimations from "./components/experiences/scroll_animations/ScrollAnimations";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ScrollAnimations" element={<ScrollAnimations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
