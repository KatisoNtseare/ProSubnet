
// Convert dotted IP to integer
export function ipToInt(ip) {
  return ip.split(".").map(Number).reduce((acc, octect) => (acc << 8) + octect)
}

// Convert integer to dotted IP
export function intToIp(int) {
  return [24, 16, 8, 0].map((shift) => (int >> shift) & 255).join(".");
}

// Convert prefix to subnet mask
export function prefixToMask(prefix) {
  const bin = "1".repeat(prefix).padEnd(32, "0");
  const mask = [];
  for (let i = 0; i < 32; i += 8) {
    mask.push(parseInt(bin.slice(i, i + 8), 2));
  }
  return mask.join(".");
}