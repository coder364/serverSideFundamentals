import React from "react";

export default function ClientServerArchitecture() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Client-Server Architecture</h2>
      <p className="mb-4 text-green-100">
        Client-server architecture is a network design where client devices request resources or services from a centralized server. The server processes these requests and returns the appropriate responses, forming the backbone of most modern web applications.
      </p>
      <ul className="list-disc list-inside text-green-100 mb-4">
        <li><span className="font-semibold text-green-200">Client:</span> Initiates requests (e.g., browsers, mobile apps).</li>
        <li><span className="font-semibold text-green-200">Server:</span> Responds to requests, processes data, manages resources.</li>
      </ul>
      <div className="flex justify-center my-6">
        <svg width="320" height="90" viewBox="0 0 320 90">
          <rect x="10" y="30" width="80" height="40" rx="8" fill="#18181b" stroke="#22d3ee" strokeWidth="2"/>
          <text x="50" y="55" textAnchor="middle" fill="#22d3ee" fontSize="16">Client</text>
          <rect x="230" y="30" width="80" height="40" rx="8" fill="#18181b" stroke="#22d3ee" strokeWidth="2"/>
          <text x="270" y="55" textAnchor="middle" fill="#22d3ee" fontSize="16">Server</text>
          <line x1="90" y1="50" x2="230" y2="50" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="230" y1="60" x2="90" y2="60" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrowhead2)" />
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#22d3ee"/>
            </marker>
            <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="0" refY="4" orient="auto">
              <polygon points="8 0, 0 4, 8 8" fill="#22d3ee"/>
            </marker>
          </defs>
        </svg>
      </div>
      <p className="text-green-100 mb-2">
        <span className="font-semibold text-green-200">Analogy:</span> Think of a restaurant: you (the client) order food from the waiter (the server), who brings your meal from the kitchen.
      </p>
    </section>
  );
}
