import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function DevOps() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">DevOps</h2>
      <p className="mb-4 text-green-100">
        DevOps combines development and operations for faster delivery using CI/CD, automation, and containerization.
      </p>
      <TryThis snippet={codeSnippets.devops} />
    </section>
  );
}
