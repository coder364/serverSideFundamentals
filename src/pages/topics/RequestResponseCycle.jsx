import React from "react";
import TerminalSim from "../../components/TerminalSim";

export default function RequestResponseCycle() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Request-Response Cycle</h2>
      <p className="mb-4 text-green-100">
        The request-response cycle describes how a client communicates with a server. The client sends a request, the server processes it, and then sends back a response. This cycle is fundamental to how the web works.
      </p>
      <ol className="list-decimal list-inside text-green-100 mb-4">
        <li>Client sends an HTTP request (e.g., GET, POST) to the server.</li>
        <li>Server receives and processes the request.</li>
        <li>Server sends an HTTP response back to the client.</li>
        <li>Client receives and renders the response.</li>
      </ol>
      <TerminalSim
        steps={[
          { text: "Client: GET /api/data", type: "command", delay: 900 },
          { text: "Server: Processing request...", type: "output", delay: 1000 },
          { text: "Server: 200 OK, sending data", type: "output", delay: 1000 },
          { text: "Client: Data received!", type: "output", delay: 800 }
        ]}
      />
      <p className="text-green-100 mt-4">
        <span className="font-semibold text-green-200">Analogy:</span> Like mailing a letter and waiting for a reply: you send a request, the recipient reads it, writes a response, and sends it back.
      </p>
    </section>
  );
}
