import React from "react";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-4">Test Your Knowledge</h2>
      <Quiz />
    </section>
  );
}
