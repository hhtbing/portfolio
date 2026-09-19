> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# AWRL6844 Radar Gateway System — Dual ESP32 IoT Gateway

![Tech](https://img.shields.io/badge/Tech-ESP32--P4%20%7C%20ESP32--C5%20%7C%20Node.js-yellow)
![Status](https://img.shields.io/badge/Status-Production-success)

## 📋 Project Overview

This repository is the main repo for AWRL6844EVM J5 radar and WT99P4C5-S1 J4 gateway. All firmware, Web management interface, deployment scripts, release packages, and documentation are based on the `main` branch of this repository.

**Project Type:** IoT Gateway System  
**Development Cycle:** 2024-2026  
**Chip Platform:** MediaTek MT7981 (ESP32-P4 + ESP32-C5)

---

## 🏗️ System Architecture

### Hardware Connection Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                  Hardware Connection Topology                    │
└─────────────────────────────────────────────────────────────────┘

    External Power
      │
      ▼
┌──────────────────────────────────────────┐
│  WT99P4C5-S1 Gateway Board (J1 Type-C)   │
│                                          │
│  ┌────────────────┐  ┌────────────────┐ │
│  │   ESP32-P4     │  │   ESP32-C5     │ │
│  │  (USB Host)    │◄─┤ (Wi-Fi/TCP)    │ │
│  │                │  │                │ │
│  └────────┬───────┘  └────────┬───────┘ │
│           │                   │         │
│           │ SDIO Bus           │ Wi-Fi   │
│           └───────────────────┘         │
│                                          │
│       J4 USB Host Interface              │
└───────────────┬──────────────────────────┘
                │
                │ USB Host (J4)
                ▼
┌───────────────────────────────────────┐
│  AWRL6844EVM Radar Module             │
│                                       │
│  ┌─────────────┐  ┌────────────────┐ │
│  │ TI mmWave   │  │  XDS110        │ │
│  │ Radar Chip  │  │  (Debug/USB)   │ │
│  │ AWRL6844    │  │                │ │
│  └─────────────┘  └────────────────┘ │
│                                       │
│       J5 Micro-USB Interface          │
└───────────────────────────────────────┘
```

### Software Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                   Software Architecture Layers                   │
└─────────────────────────────────────────────────────────────────┘

AWRL6844EVM J5 Radar / XDS110
        │
        │ USB Raw Data Stream
        ▼
WT99P4C5-S1 J4 USB Host (ESP32-P4)
        │
        │ P4 Firmware: USB Host Driver + Data Bridge
        ▼
Onboard SDIO Bus
        │
        │ Raw Byte Forwarding (No Parsing)
        ▼
ESP32-C5 Firmware: Wi-Fi / AP Provisioning / TCP Client
        │
        ├─── CLI Control Channel (TCP Port 41001)
        │
        └─── Radar Data Channel (TCP Port 41002)
                │
                │ Transparent Forwarding
                ▼
Web Gateway Server (HTTP/WebSocket Port 40080)
        │
        ├─── Device Registration & Management
        ├─── Radar Reset Control
        ├─── Configuration Queue Management
        ├─── Real-time Data Stream WebSocket
        └─── Packet Capture & Debug
                │
                ▼
        Client Apps / Cloud Platform
```

---

## ⚡ Core Features

### 1. USB Host Integration
- **Native USB Host Driver**: ESP32-P4 directly controls radar module
- **XDS110 Debug Interface**: Support TI radar firmware flashing and debugging
- **Raw Data Bridging**: Lossless forwarding of radar data stream

### 2. Wi-Fi Provisioning
- **AP Mode First Config**: Hotspot `wisefidoXXXX`, default IP `192.168.4.1`
- **Server Address Setup**: Support domain name and IP configuration
- **Config Persistence**: Save configuration parameters across power cycles

### 3. TCP Dual-Channel Bridging
- **Radar Data Channel (Port 41002)**: High-speed data stream transparent pass-through
- **CLI Control Channel (Port 41001)**: Command and status query
- **Health Check Channel**: Periodic heartbeat and connection keep-alive
- **Raw Byte Forwarding**: Gateway layer zero parsing, maximum performance

### 4. Web Management Interface
- **Device Registration & Activation**: QR code binding or manual addition
- **Radar Reset Control**: Remote restart of radar module
- **Configuration Queue Management**: Batch config distribution and status tracking
- **Real-time Data Stream Display**: WebSocket real-time push of radar data
- **Packet Capture Tool**: Network packet capture and protocol debugging

---

## 💡 Technical Highlights

### Dual ESP32 Division of Labor
- **Clear Responsibility Separation**: P4 handles USB Host, C5 handles network communication
- **High-Speed SDIO Bus**: Sufficient inter-chip data transfer bandwidth
- **Modular Design**: Firmware independent development and upgrade

### AP Provisioning Mechanism
- **Zero-Dependency First Config**: No external tools needed, configure directly via mobile browser
- **Guided Configuration Flow**: Scan Wi-Fi, enter password, set server
- **Auto Reconnect After Config**: Immediately connect to target network after save

### Raw Data Transparent Pass-Through
- **Gateway Layer No Protocol Parsing**: Avoid performance bottleneck and compatibility issues
- **Direct Byte Forwarding**: Maintain data integrity, maximize transmission rate
- **Protocol-Agnostic Design**: Support any radar firmware version and data format

### Production-Grade Stability
- **Auto Reconnect**: Automatic recovery on network disconnection
- **Fault Isolation**: USB anomaly doesn't affect Wi-Fi, network anomaly doesn't affect USB
- **Watchdog Protection**: Auto restart on firmware deadlock

---

## 🛠️ Tech Stack

**Firmware Development:**
- **C/C++** - ESP32 firmware core language
- **ESP-IDF** - Official development framework
- **FreeRTOS** - Real-time operating system
- **USB Host Driver** - P4-specific USB Host library

**Web Gateway:**
- **Node.js + Express** - RESTful API service
- **WebSocket** - Real-time data push
- **HTML/CSS/JavaScript** - Management interface

**Deployment:**
- **Docker** - Containerized gateway service
- **systemd** - Firmware service daemon
- **Shell Scripts** - Automated deployment and upgrade

---

## 📚 Repository Structure

```
AWRL6844EVM_J5_link_WT99P4C5-S1_J4/
├── Firmware/
│   ├── p4_gateway/          # ESP32-P4 USB Host firmware
│   │   ├── usb_host/        # USB driver
│   │   ├── sdio_bridge/     # SDIO bridge
│   │   └── config/          # Firmware config
│   ├── c5_gateway/          # ESP32-C5 Wi-Fi/TCP firmware
│   │   ├── wifi_manager/    # Wi-Fi and AP provisioning
│   │   ├── tcp_client/      # TCP client
│   │   └── config/          # Firmware config
│   └── common/              # Shared protocol definitions and tools
├── Web/                     # Node.js gateway and management interface
│   ├── api/                 # RESTful API
│   ├── websocket/           # Real-time data stream
│   └── frontend/            # Web management UI
├── Server/                  # Docker deployment scripts
├── releases/firmware/       # Versioned firmware binaries
└── docs/                    # Hardware compatibility and deployment guides
```

---

## 🔗 Device Connection & Configuration

### First Setup Procedure

1. **Hardware Connection**
   - Power WT99P4C5-S1 J1 Type-C interface (5V)
   - Connect AWRL6844EVM J5 Micro-USB to J4 USB Host interface
   - Observe gateway board indicator lights to confirm power on

2. **Enter AP Provisioning Mode**
   - Ground ESP32-C5 IO4 or IO5 pin during power on
   - Or trigger AP mode via CLI command during normal operation

3. **Connect to Provisioning Hotspot**
   - Phone/PC search for Wi-Fi hotspot `wisefidoXXXX`
   - Password: No password or default password (refer to documentation)

4. **Web Configuration Page**
   - Open browser and visit http://192.168.4.1
   - Scan and select target Wi-Fi network
   - Enter Wi-Fi password
   - Set server address (default: 6844.yohan.fun)
   - Save configuration

5. **Auto Connect**
   - Device auto restarts after successful configuration
   - Connect to target Wi-Fi network
   - Establish TCP connection to server
   - Start data transmission

### Normal Operation Status

- **P4 Responsibility**: Load USB Host driver → Detect radar module → Bridge data to SDIO
- **C5 Responsibility**: Connect Wi-Fi → Establish TCP connection → Bidirectional data pass-through
- **Data Flow**: Radar → P4 → SDIO → C5 → TCP → Server → Client

---

## 📊 Project Status

- ✅ Stable firmware version, production environment
- ✅ Real-time data stream performance optimized
- ✅ Web management interface complete
- ✅ Support batch device deployment

---

## 🎯 Application Scenarios

- Radar data acquisition and remote transmission
- IoT device gateway development
- Embedded USB Host applications
- ESP32 dual-chip collaborative architecture reference

---

*This gateway system demonstrates embedded development, USB Host implementation, dual ESP32 collaborative architecture, and IoT device management capabilities.*
