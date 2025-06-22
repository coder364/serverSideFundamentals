import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function Microservices() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Microservices Architecture</h2>
      <p className="mb-4 text-green-100">
        Microservices break applications into small, independent services that communicate over APIs.
      </p>
      <TryThis snippet={codeSnippets.microservices} />
    </section>
  );
}
