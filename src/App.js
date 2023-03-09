import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ContactPage,
  PortfolioPage,
 
} from "./pages/index";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skill" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

     
      </Routes>
    </div>
  );
}

export default App;
