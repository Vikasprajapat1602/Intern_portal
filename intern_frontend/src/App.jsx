import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      {/* Wrap entire page in gradient background */}
      {/* <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 text-white"> */}
        <Navbar />
        <Routes>
          {/* public routes */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          {/* Protected Layout Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
