# Terminal Subnetting Assistant

A terminal-style React web app designed to assist students and network engineers with IPv4 subnetting — both **Normal Subnetting** and **VLSM** (Variable Length Subnet Masking). The app features a command-line interface, subnet calculation outputs, and a sidebar with helpful commands and history.

---

## Features

- Terminal-like command input supporting:
  - `ipv4 net n [ip]/[prefix] [count]` for Normal subnetting
  - `ipv4 net vlsm [ip]/[prefix] [hosts...]` for VLSM subnetting
- Real-time output of subnet details:
  - Network address, first/last usable IP, broadcast, prefix, subnet mask
- Summary table for Normal subnetting showing:
  - Bits borrowed, bits left, total IPs, usable IPs
- Command history and help accessible via commands and sidebar
- Keyboard support for cycling through previous commands (arrow keys)
- Clean UI styled with TailwindCSS, responsive design

---

## 📸 Preview

![screenshot](./screenshots/terminal-subnetting-preview.png)

---

## 💡 Usage Commands

| Command | Description |
|--------|-------------|
| `help` | Show help information |
| `history` | View previously entered commands |
| `ipv4 net n [ip]/[prefix] [count]` | Perform normal subnetting (e.g. `ipv4 net n 192.168.1.0/24 4`) |
| `ipv4 net vlsm [ip]/[prefix] [hosts...]` | Perform VLSM subnetting (e.g. `ipv4 net vlsm 192.168.1.0/24 50 20 5`) |
---



## 💻 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### ## 🛠 Installation & Run

1. Clone the repo:

```bash
git clone https://github.com/KatisoNtseare/ProSubnet.git
cd ProSubnet
