import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";

export default function Security() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Security: XSS, CSRF, SQL Injection</h2>
      <p className="mb-4 text-green-100">
        Security threats like XSS, CSRF, and SQL Injection can compromise your server. Always validate input and use secure coding practices.
      </p>
      <TryThis snippet={codeSnippets.security} />
    </section>
  );
}
