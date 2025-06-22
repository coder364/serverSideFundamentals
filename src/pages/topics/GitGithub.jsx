import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function GitGithub() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Git & GitHub</h2>
      <p className="mb-4 text-green-100">
        Git is a distributed version control system. GitHub is a platform for hosting and collaborating on Git repositories.
      </p>
      <TryThis snippet={codeSnippets.git} />
    </section>
  );
}
