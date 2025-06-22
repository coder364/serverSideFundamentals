import React from "react";
import techs from "../data/technologies.json";

export default function TechGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {techs.map(tech => (
        <div
          key={tech.name}
          className="bg-gray-800 border border-green-500 rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <span className="text-3xl mb-2">{tech.icon}</span>
          <span className="text-green-300 font-bold">{tech.name}</span>
          <span className="text-green-100 text-xs mt-1">{tech.desc}</span>
        </div>
      ))}
    </div>
  );
}
