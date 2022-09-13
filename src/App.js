import "./App.css";
import Home from "./home/Home";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="parent">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
