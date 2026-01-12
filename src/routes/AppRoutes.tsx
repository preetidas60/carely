import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "./RoutePaths";

import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/dashboard";

export default function AppRoutes() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="bg-bgSoft text-textMain min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </div>
  );
}
