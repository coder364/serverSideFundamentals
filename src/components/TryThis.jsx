import React, { useState } from "react";

export default function TryThis({ snippet }) {
  const [open, setOpen] = useState(false);
  if (!snippet) return null;
  return (
    <div className="my-4">
      <button
        className="bg-green-700 text-black px-3 py-1 rounded font-bold mb-2"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Example" : "Try This"}
      </button>
      {open && (
        <pre className="bg-black text-green-300 p-4 rounded mt-2 overflow-x-auto">
          <code>{snippet.code}</code>
        </pre>
      )}
      {open && snippet.note && (
        <div className="text-green-200 text-xs mt-2">{snippet.note}</div>
      )}
    </div>
  );
}
