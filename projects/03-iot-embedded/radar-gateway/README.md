# AWRL6844 Radar Gateway System

![Tech](https://img.shields.io/badge/Tech-ESP32%20%7C%20Node.js%20%7C%20WebSocket-yellow)

## 📋 Project Overview

This repository is the main repository for AWRL6844EVM J5 radar and WT99P4C5-S1 J4 gateway. All firmware, Web, deployment, release packages, and documentation are based on the `main` branch of this repository.

**Project Type:** IoT Gateway System  
**Development Period:** 2024-2026  
**Chip Platform:** MediaTek MT7981 (ESP32-P4 + ESP32-C5)

## 🏗️ System Architecture

```
AWRL6844EVM J5 / XDS110
        |
WT99P4C5-S1 J4 USB Host (ESP32-P4)
        |
Board SDIO
        |
ESP32-C5: Wi-Fi / AP Provisioning / TCP
        |
CLI 41001 + Radar 41002
        |
Web Gateway HTTP/WebSocket 40080
```

**P4 Responsibilities:** USB Host and raw data bridging  
**C5 Responsibilities:** Wi-Fi, AP provisioning, and TCP

Radar data is only forwarded as raw bytes between P4, C5, and TCP—no format changes, parsing, or rate limiting.

## ⚡ Core Features

### 1. USB Host Integration
- ESP32-P4 USB Host connects to AWRL6844EVM J5
- XDS110 CDC interfaces:
  - MI_00: CLI (115200 baud)
  - MI_03: Radar output (1250000 baud)
  - MI_02: XDS110 debug control (target reset only)

### 2. Wi-Fi Provisioning
- AP mode for first-time setup
- Web interface at 192.168.4.1
- Wi-Fi scanning and configuration
- Server address and port setup

### 3. TCP Bridge
- CLI channel (port 41001)
- Radar data channel (port 41002)
- Health check channel
- Raw byte forwarding

### 4. Web Management
- Device registration
- Radar reset control
- Configuration queue management
- Real-time data streaming
- Packet capture

## 💡 Technical Highlights

### Dual-ESP32 Architecture
- P4: USB Host + XDS110 CDC handling
- C5: SDIO + Wi-Fi/TCP networking
- Clean separation of concerns

### AP Provisioning
- First boot or IO4/IO5 grounding triggers AP mode
- Open Wi-Fi hotspot named `wisefidoXXXX` (last 4 digits of MAC)
- Web-based configuration at 192.168.4.1
- Automatic device ID generation

### Raw Data Forwarding
- No protocol parsing at gateway level
- Direct byte forwarding for maximum performance
- Preserves original TI radar data format

## 🛠️ Tech Stack

**Firmware:**
- ESP-IDF 6.0.2
- ESP32-P4 (USB Host)
- ESP32-C5 (Wi-Fi/TCP)
- C/C++

**Web Gateway:**
- Node.js + Express
- WebSocket for real-time data
- Native HTML/CSS/JavaScript

**Deployment:**
- Docker single-container
- GitHub Actions CI/CD
- Multi-architecture images

## 📚 Repository Structure

```
AWRL6844EVM_J5_link_WT99P4C5-S1_J4/
├── Firmware/
│   ├── p4_gateway/          # ESP32-P4 USB Host firmware
│   ├── c5_gateway/          # ESP32-C5 Wi-Fi/TCP firmware
│   └── common/              # Shared protocol definitions
├── Web/                     # Node.js gateway and management
├── Server/                  # Docker deployment scripts
├── releases/firmware/       # Versioned firmware binaries
└── docs/                    # Hardware compatibility and guides
```

## 🔗 Device Connection

### First-Time Setup
1. Power WT99P4C5-S1 J1 Type-C
2. Connect AWRL6844EVM J5 Micro-USB to J4 USB Host
3. Ground IO4 or IO5 during C5 startup to enter AP mode
4. Connect to Wi-Fi hotspot `wisefidoXXXX`
5. Open http://192.168.4.1 for configuration
6. Scan and select Wi-Fi network
7. Enter server address (default: 6844.yohan.fun)
8. Save configuration and wait for device to reconnect

### Normal Operation
- Maintains J1 power and J4 USB data connection
- C5 auto-connects to server CLI/Radar/Health channels
- Web panel radar reset only resets TI radar, not P4/C5

## 📊 Project Status

- ✅ Production deployment
- ✅ Stable firmware releases
- ✅ Docker deployment ready
- ✅ Web management interface
- ✅ Real-time data streaming

---

*This gateway system demonstrates embedded development, USB Host implementation, and IoT device management capabilities.*
