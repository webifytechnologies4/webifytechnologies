import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index";
import About from "./pages/about/index";
import Services from "./pages/services/index";
import Contact from "./pages/contact/index";
import Projects from "./pages/projects/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;