// parseCommand.js
export function parseCommand(command) {
  const parts = command.trim().toLowerCase().split(/\s+/);

  if (parts[0] === "help") return { type: "help" };
  if (parts[0] === "history") return { type: "history" };

  if (parts[0] === "ipv4" && parts[1] === "net") {
    // Normal subnetting
    if (parts[2] === "n" && parts.length === 5) {
      const [ip, prefixStr] = parts[3].split("/");
      const prefix = parseInt(prefixStr);
      const count = parseInt(parts[4]);

      if (!isValidIP(ip) || isNaN(prefix) || isNaN(count)) return { type: "invalid" };
      return { type: "normal", ip, prefix, count };
    }

    // VLSM
    if (parts[2] === "vlsm" && parts.length >= 5) {
      const [ip, prefixStr] = parts[3].split("/");
      const prefix = parseInt(prefixStr);
      const hosts = parts.slice(4).map(Number);

      if (!isValidIP(ip) || isNaN(prefix) || hosts.some((h) => isNaN(h))) {
        return { type: "invalid" };
      }

      return { type: "vlsm", ip, prefix, hosts };
    }
  }

  return { type: "invalid" };
}

function isValidIP(ip) {
  const parts = ip.split(".");
  return (
    parts.length === 4 &&
    parts.every((part) => {
      const n = parseInt(part);
      return n >= 0 && n <= 255;
    })
  );
}
