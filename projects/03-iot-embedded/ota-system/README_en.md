> [🏠 Back to Profile](https://github.com/hhtbing) | [**中文文档**](./README.md) | English

# OTA-QL - Radar OTA Management System

![Status](https://img.shields.io/badge/Status-Production-success)
![Tech](https://img.shields.io/badge/Tech-Go%20%7C%20MQTT%20%7C%20TCP-red)

## 📋 Project Overview

OTA-QL is a complete OTA (Over-The-Air) firmware upgrade management system for radar devices, supporting TCP and MQTT(S) remote firmware upgrade protocols.

**Current Version:** V20.1  
**Project Type:** IoT Management System  
**Development Period:** 2024-2026  
**Project Status:** Production with 500+ Devices

## ⚡ Core Features

### 1. Dual Protocol Support
- TCP V2 protocol for direct device connection
- MQTT(S) protocol with broker support
- Automatic protocol switching and fallback

### 2. Batch Firmware Management
- Support up to 500 devices batch push
- Worker pool with 10 concurrent uploads
- Push pacer flow control (max 15 concurrent downloads)
- Automatic queueing for large batches

### 3. Desktop Monitoring Tool
- Real-time device list with virtual scrolling
- OTA progress tracking and status display
- Live firmware burning logs
- Batch operation support

### 4. Security Protection
- Device blacklist management
- Automatic device deregistration
- Interception log persistence
- Gateway address whitelist

### 5. Web Management Panel
- Device registration and management
- Firmware version control
- OTA push interface
- Real-time progress monitoring
- User authentication and authorization

## 🏗️ System Architecture

### Core Components

| Component | Technology | Responsibility |
|-----------|-----------|---------------|
| Go Server | Go + cmux | Device gateway, HTTPS API, MQTT broker |
| Web Panel | HTML/CSS/JS | Management interface |
| Monitor Tool | Python/PySide6 | Desktop monitoring and batch operations |
| Device Protocol | TCP/MQTT + Protobuf | Device communication |

### Data Flow

```
Device (TCP/MQTT)
      ↓
  cmux Gateway
      ↓
  OTA Service
      ↓
  Firmware Storage
      ↓
  Web Panel / Monitor
```

## 💡 Technical Highlights

### 1. High Concurrency Handling
- Worker pool for parallel firmware push
- Flow control to prevent network congestion
- Incremental polling API for efficient updates

### 2. Reliability
- Automatic retry on download failure
- Transaction-based OTA process
- Progress tracking and recovery

### 3. User Experience
- Virtual scrolling for 500+ device lists
- Real-time progress updates
- Dual-view summary and detail panels

## 🛠️ Tech Stack

**Backend:**
- Go (HTTP/TCP/MQTT server)
- Protobuf (Protocol definition)
- cmux (Protocol multiplexing)

**Frontend:**
- HTML5/CSS3/JavaScript
- Native Web APIs

**Desktop Tool:**
- Python 3.11+
- PySide6 (Qt for Python)
- PyInstaller (Windows EXE packaging)

**Infrastructure:**
- Docker multi-stage build
- Nginx reverse proxy
- GitHub Actions CI/CD

## 📊 Version Milestones

- **V20.1:** Server and Monitor unified upgrade, version dynamic pass-through
- **V20.0:** Monitor proxy fix, unified version upgrade
- **V19.0:** Backup gateway whitelist correction, popup UX optimization
- **V16.0:** 2000-device batch push optimization
- **V15.9:** MQTT/TCP disconnect popup fix
- **V14.7:** ETag cache + version unification
- **V13.8:** Security protection enhancement

## 📚 Repository Structure

```
OTA-QL/
├── project-code/
│   ├── server/              # Go backend service
│   ├── firmware/            # Device firmware directory
│   └── scripts/             # Local burning scripts
├── 项目文档/                 # Project documentation
└── 知识库/                  # Technical knowledge base
```

## 🔗 Production Deployment

System deployed via Docker with automatic health checks, metrics collection, and log aggregation. Supports multi-architecture builds for different deployment environments.

---

*This is a production OTA system managing hundreds of radar devices with proven reliability and scalability.*
