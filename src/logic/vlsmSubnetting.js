// vlsmSubnetting.js
import { ipToInt, intToIp, prefixToMask } from "./utils";

export function calculateVLSMSubnets(ip, basePrefix, hostCounts) {
  const start = ipToInt(ip);
  const sortedHosts = hostCounts.slice().sort((a, b) => b - a); // Big → Small
  const subnets = [];
  let current = start;

  for (const hosts of sortedHosts) {
    const neededHosts = hosts + 2; // include network and broadcast
    const bits = Math.ceil(Math.log2(neededHosts));
    const prefix = 32 - bits;
    const size = 2 ** bits;

    const network = intToIp(current);
    const broadcast = intToIp(current + size - 1);
    const first = intToIp(current + 1);
    const last = intToIp(current + size - 2);
    const mask = prefixToMask(prefix);

    subnets.push({
      network,
      broadcast,
      first,
      last,
      prefix,
      mask,
    });

    current += size;
  }

  return subnets;
}
