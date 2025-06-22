import React from "react";

export default function Card({ title, description, icon }) {
  return (
    <div className="bg-gray-800 border border-green-500 rounded-lg p-5 shadow-lg hover:scale-105 transition-transform h-full flex flex-col">
      <div className="flex items-center mb-3">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-lg font-bold text-green-300">{title}</h3>
      </div>
      <p className="text-green-100 flex-1">{description}</p>
    </div>
  );
}
