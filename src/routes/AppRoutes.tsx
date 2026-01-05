import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "./RoutePaths";

import Navbar from "../components/layout/Navbar";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/dashboard";
// import SignUpPage from "../pages/Home/SignUpPage";

export default function AppRoutes() {
  const location = useLocation();

  // Hide navbar on dashboard (and future auth pages if needed)
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="bg-bgSoft text-textMain min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path={ROUTES.HOME} element={<Home />} />
        {/* <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} /> */}

        {/* Dashboard */}
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </div>
  );
}
