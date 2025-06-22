import React from "react";
import TryThis from "../../components/TryThis";
import TerminalSim from "../../components/TerminalSim";
import codeSnippets from "../../data/codeSnippets.json";

export default function Middleware() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Middleware</h2>
      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">What is Middleware?</h3>
        <p className="text-green-100 mb-2">
          Middleware is software that sits between the request and response in a server application. It processes, modifies, or inspects requests before they reach the main logic, and can also handle responses before they are sent to the client.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">How Middleware Works</h3>
        <p className="text-green-100 mb-2">
          In frameworks like Express.js, middleware functions are executed in order for every incoming request. They can perform tasks such as authentication, logging, parsing, or error handling.
        </p>
        <TerminalSim
          steps={[
            { text: "$ curl https://api.example.com/data", type: "command", delay: 900 },
            { text: "→ [Logger] Request received", type: "output", delay: 700 },
            { text: "→ [Auth] User authenticated", type: "output", delay: 900 },
            { text: "→ [App] Data processed and sent", type: "output", delay: 1000 }
          ]}
        />
      </div>
      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Where Middleware is Used</h3>
        <ul className="list-disc list-inside text-green-100 mb-2">
          <li>Authentication and authorization</li>
          <li>Logging and monitoring</li>
          <li>Parsing request bodies (JSON, forms)</li>
          <li>Error handling</li>
          <li>Serving static files</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Example: Express.js Middleware</h3>
        <TryThis
          snippet={{
            code: `const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});`,
            note: "This logger middleware prints every request to the console before handling the route."
          }}
        />
      </div>
      <div className="mb-8">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Analogy</h3>
        <p className="text-green-100 mb-2">
          Middleware is like airport security: every passenger (request) passes through a series of checks (middleware) before reaching the gate (main server logic).
        </p>
      </div>
    </section>
  );
}
