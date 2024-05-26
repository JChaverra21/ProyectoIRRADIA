import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Service from "./pages/Service";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
