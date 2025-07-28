// App.jsx
import React, { useState } from "react";
import Terminal from "./components/Terminal";
import Sidebar from "./components/Sidebar";
import OutputTable from "./components/OutputTable";

import { parseCommand } from "./logic/parseCommand";
import { calculateNormalSubnets } from "./logic/normalSubnetting";
import { calculateVLSMSubnets } from "./logic/vlsmSubnetting";

function App() {
  const [subnets, setSubnets] = useState([]);
  const [history, setHistory] = useState([]);
  const [outputText, setOutputText] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  const helpText = `
Available Commands:
--------------------
ipv4 net n [ip]/[prefix] [count]
  → Normal subnetting
  → Example: ipv4 net n 192.168.0.0/24 4

ipv4 net vlsm [ip]/[prefix] [hosts...]
  → VLSM subnetting
  → Example: ipv4 net vlsm 192.168.1.0/24 100 50 20

help
  → Show command help

history
  → Show previously entered commands
`;

  const handleCommand = (input) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);

    const parsed = parseCommand(trimmed);

    if (parsed.type === "normal") {
      const result = calculateNormalSubnets(parsed.ip, parsed.count, parsed.prefix);
      setSubnets(result);
      setOutputText("");
    } else if (parsed.type === "vlsm") {
      const result = calculateVLSMSubnets(parsed.ip, parsed.prefix, parsed.hosts);
      setSubnets(result);
      setOutputText("");
    } else if (parsed.type === "help") {
      setSubnets([]);
      setOutputText(helpText);
    } else if (parsed.type === "history") {
      setSubnets([]);
      setOutputText(history.join("\n"));
    } else {
      setSubnets([]);
      setOutputText("⚠️ Invalid command. Type 'help' for usage.");
    }
  };

  return (
    <div className="flex bg-black min-h-screen text-green-500 font-mono">
      {showSidebar && (
        <Sidebar history={history} helpText={helpText} onClose={() => setShowSidebar(false)} />
      )}

      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">📡 IPv4 Subnetting Terminal</h1>
          <button
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
          </button>
        </div>

        <Terminal onCommand={handleCommand} history={history} />

        {outputText ? (
          <pre className="mt-4 p-4 border border-green-600 bg-zinc-900 rounded whitespace-pre-wrap">
            {outputText}
          </pre>
        ) : (
          <OutputTable subnets={subnets} />
        )}
      </div>
    </div>
  );
}

export default App;
