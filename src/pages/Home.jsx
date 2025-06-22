import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TerminalSim from "../components/TerminalSim";

// Typewriter effect for heading
function Typewriter({ text, speed = 40, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);
  useEffect(() => {
    setDisplayed("");
    i.current = 0;
    function type() {
      setDisplayed(text.slice(0, i.current + 1));
      if (i.current < text.length - 1) {
        i.current++;
        setTimeout(type, speed);
      }
    }
    type();
  }, [text, speed]);
  return (
    <h1 className={`text-3xl text-green-400 font-bold mb-4 ${className}`}>
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

const terminalIntro = [
  { text: "$ whoami", type: "command", delay: 900 },
  { text: "You are a backend explorer!", type: "output", delay: 1200 },
  { text: "Start your journey below...", type: "output", delay: 1200 }
];

const funFacts = [
  "“Backend is where the magic happens!”",
  "“APIs are the bridges of the digital world.”",
  "“A good backend makes the frontend shine.”",
  "“HTTP: The protocol that powers the web.”"
];

export default function Home() {
  const navigate = useNavigate();
  const [fact, setFact] = useState(funFacts[0]);
  const conceptsRef = useRef(null);

  useEffect(() => {
    setFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
  }, []);

  // Scroll to concepts section
  const scrollToConcepts = () => {
    if (conceptsRef.current) {
      conceptsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center">
      {/* Futuristic animated background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#18181b" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-grad)" />
          <g opacity="0.07">
            <circle cx="60%" cy="30%" r="180" fill="#22d3ee" />
            <circle cx="20%" cy="70%" r="120" fill="#22d3ee" />
          </g>
        </svg>
      </div>

      {/* Typewriter heading */}
      <Typewriter text="Welcome to Server Side Engineering Fundamentals" />

      {/* Fun fact / quote */}
      <div className="mb-4 text-green-300 italic text-center">{fact}</div>

      {/* TerminalSim intro */}
      <div className="w-full max-w-xl mb-6">
        <TerminalSim steps={terminalIntro} />
      </div>

      {/* Blinking arrow to scroll to concepts */}
      <div
        className="flex flex-col items-center cursor-pointer mt-2 mb-8"
        onClick={scrollToConcepts}
        title="Start Exploring"
      >
        <span className="text-green-400 text-lg mb-1">Start Exploring</span>
        <svg
          className="animate-bounce"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 5v14m0 0l-7-7m7 7l7-7"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-wrap gap-6 mb-8 justify-center">
        <button
          onClick={() => navigate("/concepts")}
          className="bg-gray-800 border border-green-400 text-green-200 px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          🧠 Concepts
        </button>
        <button
          onClick={() => navigate("/technologies")}
          className="bg-gray-800 border border-green-400 text-green-200 px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          🛠️ Technologies
        </button>
        <button
          onClick={() => navigate("/quiz")}
          className="bg-gray-800 border border-green-400 text-green-200 px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          📝 Quiz
        </button>
      </div>

      {/* Hidden anchor for scrolling */}
      <div ref={conceptsRef} className="mt-24"></div>
    </section>
  );
}
