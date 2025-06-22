import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function RestApis() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">REST APIs</h2>
      <p className="mb-4 text-green-100">
        REST APIs follow principles of statelessness and resource-based architecture, enabling scalable web services.
      </p>
      <TryThis snippet={codeSnippets.restApi} />
    </section>
  );
}
