import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function Databases() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Structured vs Unstructured Databases</h2>
      <p className="mb-4 text-green-100">
        Structured databases (like SQL) store data in tables with defined schema. Unstructured databases (like NoSQL) store data flexibly, e.g., documents or key-value pairs.
      </p>
      <TryThis snippet={codeSnippets.databases} />
    </section>
  );
}
