import React, { useState } from "react";
import quizData from "../data/quiz.json";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = idx => {
    setSelected(idx);
    if (quizData[current].answer === idx) setScore(score + 1);
    setTimeout(() => {
      if (current < quizData.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 700);
  };

  if (showResult) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-green-400 text-xl mb-2">Quiz Complete!</h2>
        <p className="mb-4 text-green-200">Your Score: {score} / {quizData.length}</p>
        <button
          className="bg-green-600 px-4 py-2 rounded text-black font-bold"
          onClick={() => {
            setCurrent(0);
            setScore(0);
            setShowResult(false);
            setSelected(null);
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-green-300 mb-3">{quizData[current].question}</h3>
      <ul>
        {quizData[current].options.map((opt, idx) => (
          <li key={idx}>
            <button
              className={`w-full text-left px-3 py-2 rounded mb-2 border ${
                selected === idx
                  ? idx === quizData[current].answer
                    ? "bg-green-700 border-green-400"
                    : "bg-red-700 border-red-400"
                  : "bg-gray-900 border-green-700 hover:bg-gray-700"
              }`}
              disabled={selected !== null}
              onClick={() => handleAnswer(idx)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
      <div className="text-xs text-green-400 mt-2">
        Question {current + 1} / {quizData.length}
      </div>
    </div>
  );
}
