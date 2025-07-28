import React, { useState } from "react";
import Terminal from "./components/Terminal";
import Sidebar from "./components/Sidebar";
import OutputTable from "./components/OutputTable";
import Footer from "./components/Footer"; // ✅ Add Footer
import { BiSolidError } from "react-icons/bi";

import { parseCommand } from "./logic/parseCommand";
import { calculateNormalSubnets } from "./logic/normalSubnetting";
import { calculateVLSMSubnets } from "./logic/vlsmSubnetting";

function App() {
  const [subnets, setSubnets] = useState([]);
  const [history, setHistory] = useState([]);
  const [outputText, setOutputText] = useState("");
  const [outputType, setOutputType] = useState("normal");
  const [showSidebar, setShowSidebar] = useState(true);

  const helpText = `
Available Commands:
--------------------
ipv4 net n [ip]/[prefix] [count]
  > Normal subnetting
  > Example: 
  ipv4 net n 192.168.0.0/24 4

ipv4 net vlsm [ip]/[prefix] [hosts]
  > VLSM subnetting
  > Example: 
  ipv4 net vlsm 192.168.1.0/24 
  100 50 20

help
  > Show command help

history
  > Show previously entered commands
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
      setOutputType("normal");
    } else if (parsed.type === "vlsm") {
      const result = calculateVLSMSubnets(parsed.ip, parsed.prefix, parsed.hosts);
      setSubnets(result);
      setOutputText("");
      setOutputType("normal");
    } else if (parsed.type === "help") {
      setSubnets([]);
      setOutputText(helpText);
      setOutputType("normal");
    } else if (parsed.type === "history") {
      setSubnets([]);
      setOutputText(history.join("\n"));
      setOutputType("normal");
    } else {
      setSubnets([]);
      setOutputText("Invalid command. Type 'help' for usage.");
      setOutputType("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-green-500 font-mono">
      <div className="flex flex-1">
        {/* Sidebar */}
        {showSidebar && (
          <Sidebar
            history={history}
            helpText={helpText}
            onClose={() => setShowSidebar(false)}
          />
        )}

        {/* Main Terminal Area */}
        <div className="flex-1 p-4">
          <div className="flex justify-between mb-4">
            <h1 id="terminal" className="text-xl font-bold">IPv4 Subnetting Terminal</h1>
            <button
              className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-black"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? "Hide Sidebar" : "Show Sidebar"}
            </button>
          </div>

          {/* Terminal Input */}
          <Terminal onCommand={handleCommand} history={history} />

          {/* Output Section */}
          {outputText ? (
            <div className="mt-4 p-4 border rounded whitespace-pre-wrap bg-zinc-900">
              {outputType === "error" ? (
                <div className="text-red-500 flex items-center gap-2 font-semibold">
                  <BiSolidError className="text-xl" />
                  {outputText}
                </div>
              ) : (
                <pre className="text-green-400">{outputText}</pre>
              )}
            </div>
          ) : (
            <OutputTable subnets={subnets} />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
