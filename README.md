# 🚀 Benson's Project Portfolio

> AI-Assisted Full-Stack Engineer | AIoT Developer | Vibe Coding Practitioner

## 👋 About Me

Electronic engineering background with extensive experience in medical electronics, embedded systems, and full-stack development. Specialized in **AI-assisted development (Vibe Coding)** using Codex, GitHub Copilot, Cursor, and other AI tools, combining Git, terminal, and Docker to rapidly understand unfamiliar systems and build various applications.

**Core Expertise:**
- AI platform architecture and distributed systems
- Cross-platform mobile development (Android/iOS)
- IoT and embedded systems (ESP32, TI Radar)
- Full-stack web applications and backend services
- Developer tools and automation solutions

**Contact:** hhtbing@foxmail.com | 📍 Shenzhen, China

---

## 📊 Project Overview

**19 public projects** organized into 7 categories, demonstrating expertise across:
- **Languages:** Python, Kotlin, Swift, Go, JavaScript, TypeScript, C/C++, C#, PowerShell
- **Frameworks:** FastAPI, Express, React, Vue, Jetpack Compose, SwiftUI, WPF
- **Infrastructure:** Docker, Nomad, GitHub Actions, Nginx, Tailscale
- **Domains:** AI platforms, Mobile apps, IoT systems, Web services, Developer tools

---

## 🤖 AI & Platform Projects

### [AgentMeshOS](./projects/01-ai-platform/agentmeshos/) - Self-Hosted AI Agent Platform
[![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20FastAPI%20%7C%20Nomad-blue)]()
[![Status](https://img.shields.io/badge/Status-Production-success)]()

Self-hosted AI agent runtime platform with distributed task scheduling, multi-node coordination, and unified artifact management.

**Key Features:**
- Distributed task scheduling with Nomad
- AI BOSS intelligent orchestration
- Unified artifact management with SHA-256 traceability
- Application center with lifecycle management

**Tech Stack:** Python, FastAPI, SQLite, Docker, Nomad, Tailscale  
**Highlights:** Distributed architecture, Task orchestration, Artifact traceability

👉 [View Details](./projects/01-ai-platform/agentmeshos/)

---

### [Codex Host Bridge](./projects/01-ai-platform/codex-bridge/) - Remote Development Bridge
[![Tech](https://img.shields.io/badge/Tech-C%23%20%7C%20WPF%20%7C%20WebSocket-orange)]()
[![Platform](https://img.shields.io/badge/Platform-Windows-lightblue)]()

Windows WPF desktop application bridging remote Codex clients (Linux/macOS/Windows) to local Codex App Server via Tailnet.

**Key Features:**
- Cross-platform remote development
- WebSocket gateway with session management
- Node admission control
- Linux node permanent proxy with systemd

**Tech Stack:** C#, WPF, WebSocket, Tailscale  
**Highlights:** Cross-platform bridging, Session forwarding, Node management

👉 [View Details](./projects/01-ai-platform/codex-bridge/)

---

## 📱 Mobile Application Projects

### [OwlCare Smart Monitoring System](./projects/02-mobile/owlcare/) - Multi-Platform Health Monitoring
[![Tech](https://img.shields.io/badge/Tech-Android%20%7C%20iOS%20%7C%20BLE-green)]()
[![Status](https://img.shields.io/badge/Status-Production-success)]()

Comprehensive multi-platform health monitoring system with native Android/iOS apps, device configuration tools, proxy bridge, and self-hosted OTA backend.

**Subprojects:**
1. **Android Native App** - Kotlin, Jetpack Compose, Hilt, Retrofit
2. **iOS Native App** - Swift, UIKit, CocoaPods
3. **ConfigureTool** - Independent BLE/Wi-Fi device provisioning tool
4. **OwlProxyBridge** - Android proxy bridge application
5. **OwlCareUpdateHub** - Self-hosted OTA backend (Python, FastAPI)

**Tech Stack:** Kotlin, Swift, BLE, Wi-Fi Direct, FastAPI, Docker  
**Highlights:** Native UX, BLE provisioning, Self-hosted OTA

👉 [View Details](./projects/02-mobile/owlcare/)

---

## 🔬 IoT & Embedded Projects

### [OTA-QL Radar OTA System](./projects/03-iot-embedded/ota-system/) - Full-Stack OTA Solution
[![Tech](https://img.shields.io/badge/Tech-Go%20%7C%20MQTT%20%7C%20TCP-red)]()
[![Status](https://img.shields.io/badge/Status-Production-success)]()

Complete OTA management system for radar devices supporting TCP and MQTT(S) protocols, batch firmware push, and desktop monitoring tool.

**Key Features:**
- Dual protocol support (TCP + MQTT)
- Batch firmware management (500+ devices)
- Desktop monitoring tool (Python/PySide6)
- Security protection and device blacklist
- Real-time progress tracking

**Tech Stack:** Go, MQTT, Protobuf, Python, PySide6, Docker  
**Highlights:** Dual protocol, Batch OTA, Real-time monitoring

👉 [View Details](./projects/03-iot-embedded/ota-system/)

---

### [AWRL6844 Radar Gateway](./projects/03-iot-embedded/radar-gateway/) - ESP32 Radar Bridge
[![Tech](https://img.shields.io/badge/Tech-ESP32%20%7C%20Node.js%20%7C%20WebSocket-yellow)]()

ESP32-based gateway system bridging TI AWRL6844 radar to Wi-Fi/TCP networks with web management interface.

**Key Features:**
- ESP32-P4 USB Host + ESP32-C5 Wi-Fi/TCP architecture
- AP provisioning for first-time setup
- Web management interface with device registration
- Real-time radar data streaming
- Firmware release management

**Tech Stack:** ESP32 (P4/C5), Node.js, Express, WebSocket, Docker  
**Highlights:** USB Host, AP provisioning, Real-time bridge

👉 [View Details](./projects/03-iot-embedded/radar-gateway/)

---

### [TI Radar Development Platform](./projects/03-iot-embedded/ti-radar-dev/) - Historical Reference
[![Tech](https://img.shields.io/badge/Tech-TI%20SDK%20%7C%20Python-lightgrey)]()
[![Status](https://img.shields.io/badge/Status-Archive-lightgrey)]()

Historical TI radar development platform, superseded by AWRL6844 gateway but retained as technical reference.

**Tech Stack:** TI mmWave SDK, Python, Tkinter  
**Note:** Reference project for radar development history

👉 [View Details](./projects/03-iot-embedded/ti-radar-dev/)

---

## 🌐 Web & Business System Projects

### [Owl Website](./projects/04-web-business/owl-website/) - Official Website & Marketing
[![Tech](https://img.shields.io/badge/Tech-Node.js%20%7C%20Express%20%7C%20Docker-blue)]()

WiseFido official website and marketing site with CMS backend.

**Tech Stack:** Node.js, Express, Docker, Nginx  
👉 [View Details](./projects/04-web-business/owl-website/)

---

### [OwlFront Mock](./projects/04-web-business/owl-front-mock/) - Care System Demo Frontend
[![Tech](https://img.shields.io/badge/Tech-Vue%20%7C%20JavaScript-green)]()

Demo frontend for elderly care monitoring system.

**Tech Stack:** Vue.js, JavaScript  
👉 [View Details](./projects/04-web-business/owl-front-mock/)

---

### [Server Migration](./projects/04-web-business/server-move/) - Server Migration Solutions
[![Tech](https://img.shields.io/badge/Tech-Docker%20%7C%20Nginx-orange)]()

Server migration configurations and deployment solutions.

**Tech Stack:** Docker, Nginx, Shell scripts  
👉 [View Details](./projects/04-web-business/server-move/)

---

### [Codex Mobile Control](./projects/04-web-business/codex-mobile-control/) - Mobile Coding Workspace
[![Tech](https://img.shields.io/badge/Tech-CloudCLI%20%7C%20Web-purple)]()

Browser-accessible AI coding workspace for desktop and mobile use.

**Tech Stack:** CloudCLI, Web technologies  
👉 [View Details](./projects/04-web-business/codex-mobile-control/)

---

## 🔧 Developer Tools & Utilities

### [DIR-MOVE-TOOLS](./projects/05-tools/dir-move-tools/) - Windows Directory Migration
[![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20Tkinter%20%7C%20PyInstaller-blue)]()
[![Platform](https://img.shields.io/badge/Platform-Windows-lightblue)]()

Windows desktop tool for migrating AppData and large directories using symbolic links, with transaction recovery and integrity verification.

**Tech Stack:** Python, Tkinter, PyInstaller  
**Version:** v1.9.2  
👉 [View Details](./projects/05-tools/dir-move-tools/)

---

### [PDF-MD-TOOLS](./projects/05-tools/pdf-md-tools/) - Document Conversion Tool
[![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20OCR-orange)]()

Batch conversion tool for documents/images to semantic Markdown.

**Tech Stack:** Python, OCR, Markdown  
👉 [View Details](./projects/05-tools/pdf-md-tools/)

---

### [Icon-data](./projects/05-tools/icon-data/) - SVG Icon Library Downloader
[![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20GUI-green)]()

Powerful SVG icon library batch download tool with GUI.

**Tech Stack:** Python, GUI frameworks  
👉 [View Details](./projects/05-tools/icon-data/)

---

### [USB-MIC-MUTE](./projects/05-tools/usb-mic-mute/) - USB Microphone Mute Control
[![Tech](https://img.shields.io/badge/Tech-C%20%7C%20USB%20HID-red)]()

USB microphone mute control mapped to keyboard shortcut.

**Tech Stack:** C, USB HID protocol  
👉 [View Details](./projects/05-tools/usb-mic-mute/)

---

### [HEIC-TOOLS](./projects/05-tools/heic-tools/) - HEIC Image Viewer & Converter
[![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20WPF-purple)]()

Windows desktop tool for viewing and converting HEIC images.

**Tech Stack:** Python, WPF  
👉 [View Details](./projects/05-tools/heic-tools/)

---

## 📦 Data & Dictionary Projects

### [FHIR Coding Dictionary](./projects/06-data/fhir-coding-dictionary/) - Medical Coding Library
[![Tech](https://img.shields.io/badge/Tech-FHIR%20%7C%20JSON%20Schema-blue)]()

FHIR standard medical coding dictionary library with JSON Schema validation and device mapping service.

**Tech Stack:** FHIR, JSON Schema, Docker  
**Version:** v2.1.0+owlRD  
👉 [View Details](./projects/06-data/fhir-coding-dictionary/)

---

## 🎮 Other Projects

### [Game Snake](./projects/07-others/game-snake/) - WeChat Mini Game
[![Tech](https://img.shields.io/badge/Tech-WeChat%20Mini%20Game-green)]()

Multi-snake puzzle elimination game for WeChat platform.

**Tech Stack:** WeChat Mini Game API, JavaScript  
👉 [View Details](./projects/07-others/game-snake/)

---

### [Music MuseScore](./projects/07-others/music-musescore/) - BGM Batch Generator
[![Tech](https://img.shields.io/badge/Tech-MuseScore%20%7C%20Python-orange)]()

Batch BGM generation tool using MuseScore command-line export.

**Tech Stack:** MuseScore, Python, MIDI  
👉 [View Details](./projects/07-others/music-musescore/)

---

### [Resume Evidence](./projects/07-others/resume-evidence/) - Resume & Evidence Pack
[![Tech](https://img.shields.io/badge/Tech-Documentation-lightgrey)]()

Resume and evidence materials package.

👉 [View Details](./projects/07-others/resume-evidence/)

---

## 📚 Tech Stack Deep Dive

### Languages
`Python` `Kotlin` `Swift` `Go` `JavaScript` `TypeScript` `C/C++` `C#` `PowerShell`

### Frontend
`React` `Vue` `Jetpack Compose` `SwiftUI` `WPF` `Vanilla JS`

### Backend
`FastAPI` `Express` `Flask` `ASP.NET Core`

### Mobile
`Android SDK` `iOS SDK` `Jetpack` `UIKit` `BLE` `Wi-Fi Direct`

### Embedded
`ESP32` `TI mmWave Radar` `USB Host` `UART` `SPI` `I2C`

### Infrastructure
`Docker` `Docker Compose` `Nomad` `GitHub Actions` `Nginx` `Caddy` `Tailscale`

### Databases
`SQLite` `PostgreSQL` `Redis` `FTS5`

### Tools
`Git` `GitHub CLI` `PyInstaller` `Gradle` `CocoaPods` `npm`

---

## 📈 Project Timeline

👉 [View Complete Timeline](./timeline/project-timeline.md)

---

## 💡 About My Work

I specialize in AI-assisted development (Vibe Coding), using Codex and other AI tools to:
- Rapidly understand unfamiliar codebases
- Build full-stack applications efficiently
- Bridge hardware and software domains
- Deploy production-ready systems

My projects span across platforms and technologies, from embedded systems to cloud platforms, demonstrating versatility and deep technical expertise.

---

## 📬 Contact

- **Email:** hhtbing@foxmail.com
- **Location:** Shenzhen, China
- **Work Mode:** Full-time, Contract, Remote, Project-based
- **GitHub:** [github.com/hhtbing](https://github.com/hhtbing)

---

*Portfolio last updated: September 2026*
