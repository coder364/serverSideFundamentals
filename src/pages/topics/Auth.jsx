import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function Auth() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Authentication & Authorization (JWT, OAuth)</h2>
      <p className="mb-4 text-green-100">
        Authentication verifies user identity. Authorization controls access. JWT and OAuth are common methods.
      </p>
      <TryThis snippet={codeSnippets.auth} />
    </section>
  );
}
