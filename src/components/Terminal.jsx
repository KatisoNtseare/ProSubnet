import React, { useState } from "react";
import { FaTerminal } from "react-icons/fa6";

function Terminal({ onCommand, history }) {
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onCommand(input);
      // keep input
      setHistoryIndex(null);
    }

    if (e.key === "ArrowUp") {
      if (history.length === 0) return;
      const newIndex =
        historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setInput(history[newIndex]);
      setHistoryIndex(newIndex);
    }

    if (e.key === "ArrowDown") {
      if (history.length === 0) return;
      if (historyIndex === null) return;
      const newIndex = Math.min(history.length - 1, historyIndex + 1);
      setInput(history[newIndex] || "");
      setHistoryIndex(newIndex === history.length - 1 ? null : newIndex);
    }
  };

  const handleSubnetClick = () => {
    if (input.trim() !== "") {
      onCommand(input);
      setHistoryIndex(null);
    }
  };

  return (
    <div
      id="terminal"
      className="terminal bg-zinc-900 p-4 rounded border border-green-600"
    >
      <div className="text-lg flex gap-2 items-center select-none">
        <FaTerminal className="text-green-400 text-xl" />
        <span>Enter your command:</span>
      </div>

      <div className="mt-2 flex">
        <input
          className="flex-grow p-2 bg-black text-green-500 border border-green-700 rounded-l focus:outline-none focus:ring-2 focus:ring-green-600"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. ipv4 net n 192.168.1.0/24 4"
          spellCheck={false}
          aria-label="Terminal command input"
        />

        <button
          onClick={handleSubnetClick}
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 rounded-r transition select-none"
          aria-label="Run subnet command"
        >
          Subnet
        </button>
      </div>
    </div>
  );
}

export default Terminal;
