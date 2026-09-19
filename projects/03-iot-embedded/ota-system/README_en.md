> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# OTA-QL — Radar OTA Management System

> [**中文文档**](./README.md) | English

![Status](https://img.shields.io/badge/Status-Production-success)
![Tech](https://img.shields.io/badge/Tech-Go%20%7C%20MQTT%20%7C%20TCP-red)

## 📋 Project Overview

OTA-QL is a complete OTA (Over-The-Air) firmware management system for radar devices, supporting both TCP and MQTT(S) remote firmware upgrade protocols. The system includes server, Web management panel, desktop monitoring tool, and 3D radar data visualization demo module.

**Current Version:** V20.1  
**Project Type:** IoT Management System  
**Development Cycle:** 2024-2026  
**Project Status:** Production, Managing 500+ Devices

---

## 🎯 System Components

| Component | Tech Stack | Responsibilities |
|-----------|-----------|-----------------|
| **Go Server** | Go + cmux + MQTT | Device gateway, HTTPS API, MQTT broker, protocol routing |
| **Web Admin Panel** | HTML/CSS/JS | Device registration, firmware management, OTA push, user authentication |
| **Desktop Monitor Tool** | Python + PySide6 | Real-time device monitoring, batch operations, log tracking, virtual scrolling |
| **3D Radar Demo** | Python + PyQt/Three.js | Radar point cloud visualization, real-time data stream display, 3D target tracking |
| **Device Protocol** | TCP/MQTT + Protobuf | Dual-protocol device communication, auto-switching and fallback |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        OTA-QL System                             │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┬─────────────┐
        │                     │                     │             │
        ▼                     ▼                     ▼             ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐ ┌──────────┐
│ Go OTA Server │    │ Web Admin     │    │ Desktop Monitor│ │3D Radar  │
│(cmux Gateway) │    │(Device/FW Mgmt)│   │(Batch Ops)     │ │(Data Viz)│
└───────┬───────┘    └───────────────┘    └───────────────┘ └──────────┘
        │
        ├─── TCP V2 Protocol ────→ Device Group A
        │
        └─── MQTT(S) Protocol ───→ Device Group B
                │
                ▼
        Firmware Push / Status Monitor / Log Tracking
```

---

## ⚡ Core Features

### 1. Dual-Protocol OTA Upgrade
- **TCP V2 Protocol**: Direct device connection, low-latency firmware push
- **MQTT(S) Protocol**: Cloud relay, NAT traversal support
- **Auto Protocol Switching**: Intelligent protocol selection based on network environment
- **Failure Rollback**: Automatic recovery to old version on upgrade failure

### 2. Batch Firmware Management
- **Batch Push**: Support up to 500 concurrent device upgrades
- **Group Management**: Group by device type, firmware version, region
- **Progress Tracking**: Real-time display of each device's upgrade progress
- **Large Batch Queuing**: Auto-queue when exceeding concurrency limit

### 3. Desktop Monitor Tool
- **Real-time Device List**: Virtual scrolling for large-scale device display
- **OTA Progress Visualization**: Real-time progress bars, status indicators, completion percentage
- **Live Log Stream**: Firmware flashing logs with real-time push and filtering
- **Batch Operations Panel**: One-click select all, batch push, batch restart
- **Device Health Check**: Connection status, firmware version, anomaly alerts

### 4. 3D Radar Data Visualization Demo
- **Point Cloud Real-time Rendering**: Real-time display of radar point cloud data in 3D space
- **Target Tracking Visualization**: Moving target trajectory tracking and prediction
- **Multi-dimensional Data Display**: Multi-dimensional visualization of distance, velocity, angle, energy
- **Replay & Recording**: Radar data recording and offline replay functionality
- **Performance Optimization**: Support for high frame rate real-time data stream rendering

### 5. Web Management Panel
- **Device Registration & Management**: Device list, info editing, batch import
- **Firmware Version Control**: Version upload, release management, history tracking
- **OTA Push Interface**: Web UI and RESTful API dual channels
- **Real-time Progress Monitoring**: Push status dashboard, device status statistics
- **User Authentication & Authorization**: JWT auth, role permissions, operation audit

### 6. Security & Protection
- **Device Blacklist**: Automatic interception and isolation of abnormal devices
- **Auto Device Deregistration**: Auto cleanup of long-term offline devices
- **Interception Log Persistence**: Complete security audit trail
- **Gateway Address Whitelist**: Only authorized gateways allowed

---

## 💡 Technical Highlights

### High-Concurrency Architecture
- **cmux Port Multiplexing**: Single port supports HTTPS, TCP, MQTT simultaneously
- **Goroutine Pool Management**: Efficient Go coroutine resource management
- **Flow Control**: Prevent network congestion and device overload
- **Queue Buffering**: Auto-queue and rate-limit large batch tasks

### Protocol Flexibility
- **TCP/MQTT Dual Protocol**: Adapt to different network environments
- **Protobuf Serialization**: Efficient binary data transmission
- **Auto Protocol Switching**: Seamless switching on network failure
- **Backward Compatibility**: Support multiple protocol versions coexistence

### Production-Grade Monitoring
- **Desktop Monitor Tool**: Professional device management and batch operations UI
- **Virtual Scrolling Optimization**: Smoothly display thousands of devices
- **Real-time Data Stream**: WebSocket push device status and logs
- **Log Persistence**: Complete operation audit and fault tracing

### Data Visualization
- **3D Radar Demo**: Intuitive display of radar working principle and data quality
- **Real-time Point Cloud Rendering**: High-performance 3D graphics engine
- **Multi-dimensional Data Analysis**: Support for various radar data format parsing

---

## 🛠️ Tech Stack

**Backend Services:**
- **Go** - Core OTA service and device gateway
- **cmux** - Port multiplexing and protocol routing
- **MQTT Broker** - Message queue and device communication
- **Protobuf** - Efficient serialization protocol

**Web Frontend:**
- **HTML/CSS/JavaScript** - Management interface
- **WebSocket** - Real-time data push
- **RESTful API** - Standardized interface

**Desktop Monitor Tool:**
- **Python 3.x** - Core development language
- **PySide6 / PyQt6** - Cross-platform desktop UI framework
- **Virtual Scroll Widget** - Large-scale list performance optimization
- **Async IO** - Non-blocking network communication

**3D Visualization:**
- **Python + PyQt** - Desktop 3D rendering
- **Three.js** - Web-based 3D graphics
- **Point Cloud Library** - Radar data parsing and processing

**Infrastructure:**
- **Docker** - Containerized deployment
- **systemd** - Service daemon and auto-restart
- **SQLite / JSON** - Lightweight data storage

---

## 📚 Repository Structure

```
ota/
├── server/              # Go OTA service
│   ├── gateway/         # cmux gateway and protocol routing
│   ├── ota/             # Firmware push core logic
│   ├── mqtt/            # MQTT broker integration
│   └── api/             # RESTful API service
├── web/                 # Web management panel
│   ├── dashboard/       # Dashboard and statistics
│   ├── device/          # Device management UI
│   └── firmware/        # Firmware version management
├── monitor/             # Desktop monitoring tool
│   ├── ui/              # PySide6 interface
│   ├── device_list/     # Virtual scroll device list
│   └── batch_ops/       # Batch operation logic
├── radar_viz/           # 3D radar visualization demo
│   ├── 3d_viewer/       # Point cloud 3D renderer
│   ├── data_parser/     # Radar data parser
│   └── replay/          # Data recording and playback
├── device/              # Device protocol implementation
│   ├── tcp_client/      # TCP protocol client
│   └── mqtt_client/     # MQTT protocol client
└── docs/                # Documentation and deployment guides
```

---

## 🔗 Related Links

- **Desktop Monitor Tool**: Batch operations and real-time monitoring
- **3D Radar Demo**: Point cloud visualization and data analysis

---

*Production-grade OTA management system demonstrating high-concurrency handling, dual-protocol support, batch firmware management, and professional data visualization capabilities.*
