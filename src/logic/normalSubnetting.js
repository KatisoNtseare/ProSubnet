import { ipToInt, intToIp, prefixToMask } from "./utils";

// Calculates standard (equal-sized) subnets from a base IP and prefix
export function calculateNormalSubnets(ip, count, prefix) {
  const start = ipToInt(ip);                     // Convert IP to int for math
  const bitsBorrowed = Math.ceil(Math.log2(count));
  const newPrefix = prefix + bitsBorrowed;       // New prefix after borrowing bits
  const hostBits = 32 - newPrefix;
  const totalIPs = 2 ** hostBits;
  const usableIPs = totalIPs > 2 ? totalIPs - 2 : totalIPs; // /31, /32 corner case

  const subnets = [];

  for (let i = 0; i < count; i++) {
    const netStart = start + i * totalIPs;

    subnets.push({
      network: intToIp(netStart),
      first: intToIp(netStart + 1),
      last: intToIp(netStart + totalIPs - 2),
      broadcast: intToIp(netStart + totalIPs - 1),
      prefix: newPrefix,
      mask: prefixToMask(newPrefix),
      bitsBorrowed,
      bitsLeft: hostBits,
      totalIPs,
      usableIPs
    });
  }

  return subnets;
}