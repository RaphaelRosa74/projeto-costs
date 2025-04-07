import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Company from "../components/pages/Company";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";
import NewProject from "../components/pages/NewPoject";

function RoutesContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newproject" element={<NewProject />} />
    </Routes>
  );
}

export default RoutesContainer;
