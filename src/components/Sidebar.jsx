import React from "react";
import { HiMiniCommandLine } from "react-icons/hi2";
import { MdOutlineContactSupport } from "react-icons/md";

function Sidebar({ history, helpText, onClose }) {
  return (
    <div className="w-70 p-4 bg-zinc-900 border-r border-green-600">
      <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg flex items-center gap-2">
        <span className="text-green-400 text-2xl"><MdOutlineContactSupport /></span> Help
      </h2>

        <button onClick={onClose} className="text-green-400 hover:text-green-200">✖</button>
      </div>

      <pre className="text-sm whitespace-pre-wrap mb-4">{helpText}</pre>

      <h3 className="font-semibold text-green-400 flex items-center gap-2">
        <span className="text-green-400 text-2xl"><HiMiniCommandLine /></span> Command History
      </h3>
      <ul className="mt-2 text-sm list-disc pl-4 space-y-1">
        {history.slice().reverse().map((cmd, i) => (
          <li key={i}>{cmd}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
