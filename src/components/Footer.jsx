import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-green-400 text-center py-3 mt-8 text-green-300 text-xs">
      <span>
        © {new Date().getFullYear()} Server Side Engineering Fundamentals | Crafted with React & Tailwind
      </span>
    </footer>
  );
}
