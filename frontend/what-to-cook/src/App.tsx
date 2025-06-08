import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import Recipes from "./pages/Recipes/Recipes.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
