// File: src/components/OutputTable.jsx

import React from "react";

// 📊 Displays a table of subnetting results, with extended technical info
function OutputTable({ subnets }) {
  if (!subnets || subnets.length === 0) return null;

  const { bitsBorrowed, bitsLeft, totalIPs, usableIPs } = subnets[0] || {};

  return (
    <div className="overflow-x-auto mt-4">
      {/* Subnet Table */}
      <table className="min-w-full bg-gray-900 text-green-300 border border-green-600">
        <thead className="bg-green-800 text-sm">
          <tr>
            <th className="px-4 py-2 border">Network</th>
            <th className="px-4 py-2 border">First Usable</th>
            <th className="px-4 py-2 border">Last Usable</th>
            <th className="px-4 py-2 border">Broadcast</th>
            <th className="px-4 py-2 border">Prefix</th>
            <th className="px-4 py-2 border">Mask</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {subnets.map((s, idx) => (
            <tr key={idx} className="even:bg-green-950">
              <td className="px-4 py-2 border">{s.network}</td>
              <td className="px-4 py-2 border">{s.first}</td>
              <td className="px-4 py-2 border">{s.last}</td>
              <td className="px-4 py-2 border">{s.broadcast}</td>
              <td className="px-4 py-2 border">/{s.prefix}</td>
              <td className="px-4 py-2 border">{s.mask}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary Table */}
      <div className="mt-6">
        <h2 className="text-green-400 text-sm font-semibold mb-2">📋 Subnet Summary</h2>
        <table className="min-w-max bg-gray-900 text-green-300 border border-green-600 text-sm">
          <thead className="bg-green-800">
            <tr>
              <th className="px-4 py-2 border">Bits Borrowed</th>
              <th className="px-4 py-2 border">Bits Left</th>
              <th className="px-4 py-2 border">Total IPs</th>
              <th className="px-4 py-2 border">Usable IPs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-green-950">
              <td className="px-4 py-2 border text-center">{bitsBorrowed}</td>
              <td className="px-4 py-2 border text-center">{bitsLeft}</td>
              <td className="px-4 py-2 border text-center">{totalIPs}</td>
              <td className="px-4 py-2 border text-center">{usableIPs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OutputTable;
