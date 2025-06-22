import React from "react";
import RealTimeDemo from "../../components/RealTimeDemo";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function WebSockets() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">WebSockets & Real-Time Communication</h2>
      <p className="mb-4 text-green-100">
        WebSockets enable real-time, two-way communication between client and server. Used for chat, live updates, etc.
      </p>
      <RealTimeDemo />
      <TryThis snippet={codeSnippets.websockets} />
    </section>
  );
}
