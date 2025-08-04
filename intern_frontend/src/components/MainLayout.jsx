import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Trophy,
} from "lucide-react";

export default function MainLayout() {
  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Leaderboard", icon: <Trophy size={20} />, path: "/leaderboard" },
    { name: "Reports", icon: <FileText size={20} />, path: "/reports" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    //  Use column layout to place Navbar at top and rest below
    <div className="flex flex-col min-h-screen pt-16 bg-black">

      {/*  Navbar placed at the top */}
      <Navbar />

      {/*  Flex container for sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">

        {/*  Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-[#131C31] to-[#0D1424] text-white p-5 shadow-lg">
          <div className="text-2xl font-extrabold text-purple-400 mb-10 tracking-wide">
            
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all ${isActive
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="flex-1 bg-gradient-to-b from-[#1E1144] to-[#2B0A3D] text-white p-6 overflow-auto">
          {/* Dynamic route content injected here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
