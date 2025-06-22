import React from "react";
import TryThis from "../../components/TryThis";
import codeSnippets from "../../data/codeSnippets.json";
import TerminalSim from "../../components/TerminalSim";

export default function LinuxCommands() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Basic Linux Commands</h2>
      <p className="mb-4 text-green-100">
        Linux commands are essential for server operations. Learn to navigate, manage files, and control processes.
      </p>
      <TerminalSim steps={codeSnippets.linuxCommands.simulation} />
      <TryThis snippet={codeSnippets.linuxCommands} />
    </section>
  );
}
