import React from "react";
import { HiMiniCommandLine } from "react-icons/hi2";
import { MdOutlineContactSupport } from "react-icons/md";

function Sidebar({ history, helpText, onClose, className }) {
  return (
    <aside
      className={`w-full md:w-72 h-[calc(100vh-115px)] overflow-y-auto p-4 bg-zinc-900 border-r border-green-600 sidebar-scroll flex-shrink-0 ${className}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-zinc-900 z-10 pb-2">
        <h2 className="font-bold text-lg flex items-center gap-2 select-none">
          <MdOutlineContactSupport className="text-green-400 text-2xl" />
          Help
        </h2>
        <button
          onClick={onClose}
          className="text-green-400 hover:text-green-200 text-xl select-none"
          aria-label="Close Help"
          type="button"
        >
          ✖
        </button>
      </div>

      {/* Help Text */}
      <pre className="text-sm whitespace-pre-wrap mb-6">{helpText}</pre>

      {/* Command History */}
      <h3 className="font-semibold text-green-400 flex items-center gap-2 mb-2 select-none">
        <HiMiniCommandLine className="text-green-400 text-2xl" />
        Command History
      </h3>
      <ul className="text-sm list-disc pl-4 space-y-1 max-h-60 overflow-auto">
        {history.slice().reverse().map((cmd, i) => (
          <li key={i}>{cmd}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
