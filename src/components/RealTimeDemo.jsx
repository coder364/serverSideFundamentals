import React, { useState } from "react";

export default function RealTimeDemo() {
  const [messages, setMessages] = useState([
    { user: "Server", text: "Welcome to the real-time chat demo!" }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (input.trim()) {
      setMessages([...messages, { user: "You", text: input }]);
      setTimeout(() => {
        setMessages(msgs => [
          ...msgs,
          { user: "Server", text: "Echo: " + input }
        ]);
      }, 600);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-800 border border-green-500 rounded-lg p-4 mb-4">
      <div className="h-32 overflow-y-auto mb-2 bg-black rounded p-2">
        {messages.map((msg, i) => (
          <div key={i} className={msg.user === "You" ? "text-green-200" : "text-green-400"}>
            <b>{msg.user}:</b> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 px-2 py-1 rounded-l bg-gray-900 text-green-200 border border-green-500"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-green-700 text-black px-3 py-1 rounded-r font-bold"
          onClick={send}
        >
          Send
        </button>
      </div>
    </div>
  );
}
