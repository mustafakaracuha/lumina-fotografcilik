import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Photograpy from "./pages/Photograpy";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photograpy" element={<Photograpy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
