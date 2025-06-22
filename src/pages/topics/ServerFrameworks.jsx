import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";
import TechGrid from "../../components/TechGrid";

export default function ServerFrameworks() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Server Frameworks</h2>
      <p className="mb-4 text-green-100">
        Popular frameworks include Node.js, Express, and Django. They simplify server-side development.
      </p>
      <TechGrid />
      <TryThis snippet={codeSnippets.serverFrameworks} />
    </section>
  );
}
