import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Dashboard from "../pages/Dashboard/dashboard";
import Home from "../pages/Home/Home";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="bg-bgSoft text-textMain min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
