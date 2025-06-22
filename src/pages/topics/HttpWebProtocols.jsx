import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";
import TerminalSim from "../../components/TerminalSim";

export default function HttpWebProtocols() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">HTTP & Web Protocols</h2>
      <p className="mb-4 text-green-100">
        HTTP is the foundation of data communication for the web. Methods like GET, POST, and status codes define interactions.
      </p>
      <TerminalSim steps={codeSnippets.http.simulation} />
      <TryThis snippet={codeSnippets.http} />
    </section>
  );
}
