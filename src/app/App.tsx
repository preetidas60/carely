import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Dashboard from "../pages/Dashboard/dashboard";
import Home from "../pages/Home/Home";
import FeaturesPage from "../pages/Features/Features";
import AboutPage from "../pages/About/About";
import FAQPage from "../pages/FAQ/FAQ";

function App() {
  return (
    <div className="bg-bgSoft text-textMain min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
