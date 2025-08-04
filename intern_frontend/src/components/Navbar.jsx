import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    // Add more routes here if needed
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-700 via-purple-800 to-black shadow-lg">
      {/* flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-4 */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-white text-xl font-bold tracking-wide">Intern Portal</div>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-white border-b-2 border-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
