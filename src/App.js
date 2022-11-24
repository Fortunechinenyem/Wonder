import { Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
