import React from "react";
import concepts from "../data/concepts.json";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import TerminalSim from "../components/TerminalSim";
import codeSnippets from "../data/codeSnippets.json";

// Map each concept title to its correct route (must match your App.jsx topic routes)
const conceptRouteMap = {
  "Git & GitHub": "/topics/git-github",
  "Structured vs Unstructured Databases": "/topics/databases",
  "Linux Commands": "/topics/linux-commands",
  "Server Frameworks": "/topics/server-frameworks",
  "HTTP & Web Protocols": "/topics/http-web-protocols",
  "REST APIs": "/topics/rest-apis",
  "XSS, CSRF, SQL Injection": "/topics/security",
  "GraphQL, Swagger, Postman": "/topics/graphql-swagger-postman",
  "Networking Basics": "/topics/networking",
  "DevOps": "/topics/devops",
  "SSR vs CSR": "/topics/ssr-csr",
  "Authentication & Authorization": "/topics/auth",
  "Microservices": "/topics/microservices",
  "WebSockets & Real-Time": "/topics/websockets",
  "Client-Server Architecture": "/topics/client-server-architecture",
  "Request-Response Cycle": "/topics/request-response-cycle",
  "HTTP Methods": "/topics/http-web-protocols",
  "Middleware": "/topics/middleware",
  "Server Security": "/topics/security"
};

const simStepsMap = {
  "Git & GitHub": codeSnippets.git?.simulation,
  "Structured vs Unstructured Databases": codeSnippets.databases?.simulation,
  "Linux Commands": codeSnippets.linuxCommands?.simulation,
  "Server Frameworks": codeSnippets.serverFrameworks?.simulation,
  "HTTP & Web Protocols": codeSnippets.http?.simulation,
  "REST APIs": codeSnippets.restApi?.simulation,
  "XSS, CSRF, SQL Injection": codeSnippets.security?.simulation,
  "GraphQL, Swagger, Postman": codeSnippets.graphql?.simulation,
  "Networking Basics": codeSnippets.networking?.simulation,
  "DevOps": codeSnippets.devops?.simulation,
  "SSR vs CSR": codeSnippets.ssrCsr?.simulation,
  "Authentication & Authorization": codeSnippets.auth?.simulation,
  "Microservices": codeSnippets.microservices?.simulation,
  "WebSockets & Real-Time": codeSnippets.websockets?.simulation
};

export default function Concepts() {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-4">Key Concepts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {concepts.map((concept) => {
          // Use the correct route or null if not implemented
          const route = conceptRouteMap[concept.title];
          const simSteps = simStepsMap[concept.title];
          return route ? (
            <button
              key={concept.title}
              className="flex w-full h-full text-left bg-transparent border-none p-0 m-0 focus:outline-none"
              style={{ minHeight: "100%" }}
              onClick={() => navigate(route)}
              title={`Go to ${concept.title}`}
              tabIndex={0}
            >
              <div className="cursor-pointer w-full flex flex-col h-full">
                <Card {...concept} />
                {simSteps && (
                  <div className="mt-2 pointer-events-none opacity-80">
                    <TerminalSim steps={simSteps.slice(0, 1)} />
                  </div>
                )}
              </div>
            </button>
          ) : (
            <div key={concept.title} className="w-full h-full flex flex-col">
              <Card {...concept} />
            </div>
          );
        })}
      </div>
    </section>
  );
}