import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/concepts", label: "Concepts" },
  { to: "/technologies", label: "Technologies" },
  { to: "/quiz", label: "Quiz" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="bg-gray-800 border-b border-green-400 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <span className="text-green-400 text-xl font-bold tracking-widest">
          $ Server Side Engineering Fundamentals
        </span>
        <nav className="space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-green-400 transition ${
                location.pathname === link.to ? "text-green-400 underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
