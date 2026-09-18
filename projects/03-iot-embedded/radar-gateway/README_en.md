> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

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

### 2. Wi-Fi Provisioning

### 3. TCP Bridge

### 4. Web Management

## 💡 Technical Highlights

### Dual-ESP32 Architecture

### AP Provisioning
- First boot or IO4/IO5 grounding triggers AP mode
- Open Wi-Fi hotspot named `wisefidoXXXX` (last 4 digits of MAC)

### Raw Data Forwarding

## 🛠️ Tech Stack

**Firmware:**
- C/C++

**Web Gateway:**

**Deployment:**

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

### Normal Operation
- C5 auto-connects to server CLI/Radar/Health channels
- Web panel radar reset only resets TI radar, not P4/C5

## 📊 Project Status


---

*This gateway system demonstrates embedded development, USB Host implementation, and IoT device management capabilities.*
