# ProSubnet — Terminal Subnetting Assistant

A sleek terminal-style React web app crafted to empower students and network engineers with IPv4 subnetting tasks — covering **Normal Subnetting** and **VLSM** (Variable Length Subnet Masking). It simulates a CLI environment with powerful subnet calculations, command history, and an intuitive sidebar for help and navigation.

---

## 🚀 Features

- **Terminal-style Command Input** supporting:
  - `ipv4 net n [ip]/[prefix] [count]` — Normal subnetting  
  - `ipv4 net vlsm [ip]/[prefix] [hosts...]` — VLSM subnetting with multiple host counts
- Real-time subnet details displayed including:  
  Network address, first & last usable IP, broadcast address, prefix length, subnet mask
- Comprehensive **summary table** for Normal subnetting:  
  Bits borrowed/left, total and usable IP counts
- Interactive **command history** and **help** accessible via terminal commands and sidebar  
- Keyboard navigation for command history with arrow keys  
- Responsive, clean UI styled with TailwindCSS for consistent look-and-feel

---

## 📸 Live Preview
### IPv4 Normal Subnetting 
```bash
ipv4 net n 192.168.0.0/24 4
```
<img width="1365" height="641" alt="image" src="https://github.com/user-attachments/assets/c70abb0f-3a97-4f9b-8be9-24cca4478f8f" />

### IPv4 VLSM Subnetting 
```bash
ipv4 net vlsm 192.168.1.0/24 100 50 20
```
<img width="1351" height="650" alt="image" src="https://github.com/user-attachments/assets/7af0bb7b-0b83-4a3d-8a80-5b95b32ad502" />

### Help Command 
```bash
help
```
<img width="1343" height="645" alt="image" src="https://github.com/user-attachments/assets/7e7b9431-2183-46fd-af08-10e402a98599" />

### History Command 
```bash
history
```
<img width="1355" height="648" alt="image" src="https://github.com/user-attachments/assets/53aaede1-05f7-4581-938c-12afe3665840" />

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

### 🛠 Installation & Run Locally

# Clone the repository
```bash
git clone https://github.com/KatisoNtseare/ProSubnet.git
cd ProSubnet
```

# Install dependencies (choose one)
```bash
npm install
```
or
```bash
yarn  install
```

# Start the development server
```bash
npm run dev
```
or
```bash
yarn dev
```

Open http://localhost:5173 in your browser to access the app.


## 🛠️ Development Notes
Built with React 18 + TailwindCSS for styling
State management via React hooks and Context API
Designed with accessibility & keyboard navigation in mind
Modular command parsing allows easy extension for new subnetting commands
Robust IPv4 validation & subnet calculation logic in utilities
Future plans: Add IPv6 support, export results (CSV/PDF), and enhanced VLSM visualization


## 🤝 Contributing
Contributions are welcome! Please:

-Fork the repository
-Create a feature branch (git checkout -b feature/your-feature)
-Commit your changes (git commit -m 'Add new feature')
-Push to branch (git push origin feature/your-feature)
-Open a pull request
-Make sure your code follows the current style and passes existing tests.


## 🙋‍♂️ Contact & Support
-Created and maintained by Katiso Ntseare
-GitHub: github.com/KatisoNtseare
-Feel free to open issues or request features!


Let me know if you want me to add badges (like build status, license, or NPM version) or sections like FAQ, troubleshooting, or detailed architecture!
