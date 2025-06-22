import React, { useState, useEffect, useRef } from "react";

export default function TerminalSim({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  // Typewriter effect for each step
  useEffect(() => {
    if (!steps || !steps[currentStep]) return;
    setTyped("");
    setIsTyping(true);
    const { text } = steps[currentStep];
    let i = 0;
    function typeChar() {
      setTyped(text.slice(0, i + 1));
      if (i < text.length - 1) {
        i++;
        setTimeout(typeChar, 18 + Math.random() * 40);
      } else {
        setIsTyping(false);
      }
    }
    typeChar();
  }, [currentStep, steps]);

  // Advance to next step after delay
  useEffect(() => {
    if (!steps || !steps[currentStep]) return;
    if (isTyping) return;
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, steps[currentStep].delay || 1000);
    return () => clearTimeout(timer);
  }, [isTyping, currentStep, steps]);

  // Scroll to bottom on new step
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [currentStep, typed]);

  // Copy-to-clipboard for last command
  const handleCopy = () => {
    if (
      steps &&
      steps[currentStep] &&
      steps[currentStep].type === "command"
    ) {
      navigator.clipboard.writeText(steps[currentStep].text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  if (!steps) return null;

  // Render all finished steps + current typing line
  const renderedSteps = [];
  for (let i = 0; i < currentStep; i++) {
    const step = steps[i];
    renderedSteps.push(
      <div
        key={i}
        className={
          step.type === "command"
            ? "text-green-400 font-semibold select-text"
            : "text-green-200"
        }
      >
        {step.text}
      </div>
    );
  }

  // Current line with typing and blinking cursor
  const current = steps[currentStep];
  renderedSteps.push(
    <div
      key={"current"}
      className={
        current.type === "command"
          ? "text-green-400 font-semibold flex items-center group select-text"
          : "text-green-200 flex items-center"
      }
      style={{ position: "relative" }}
      onClick={
        current.type === "command" && !isTyping
          ? handleCopy
          : undefined
      }
      title={
        current.type === "command" && !isTyping
          ? "Click to copy"
          : undefined
      }
    >
      <span>
        {typed}
        {isTyping ? (
          <span className="inline-block w-2 h-5 bg-green-300 animate-pulse ml-0.5 align-middle" />
        ) : (
          current.type === "command" && copied && (
            <span className="ml-2 text-xs text-green-300 bg-green-900 px-2 py-0.5 rounded">
              Copied!
            </span>
          )
        )}
      </span>
    </div>
  );

  return (
    <div className="bg-black border border-green-600 rounded-lg p-4 font-mono text-green-300 shadow-inner mb-6">
      <div
        ref={containerRef}
        className="h-48 overflow-y-auto pr-2"
        style={{ scrollbarColor: "#22d3ee #18181b" }}
      >
        {renderedSteps}
      </div>
      {currentStep === steps.length - 1 && !isTyping && (
        <button
          className="mt-4 px-3 py-1 bg-green-700 rounded hover:bg-green-600 text-black font-bold"
          onClick={() => {
            setCurrentStep(0);
            setTyped("");
            setIsTyping(true);
          }}
        >
          Replay
        </button>
      )}
    </div>
  );
}
