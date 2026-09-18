> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

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

### 2. Batch Firmware Management
- Push pacer flow control (max 15 concurrent downloads)

### 3. Desktop Monitoring Tool

### 4. Security Protection

### 5. Web Management Panel

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

### 2. Reliability

### 3. User Experience

## 🛠️ Tech Stack

**Backend:**

**Frontend:**

**Desktop Tool:**

**Infrastructure:**

## 📊 Version Milestones

- **V20.1:** Server and Monitor unified upgrade, version dynamic pass-through
- **V20.0:** Monitor proxy fix, unified version upgrade
- **V19.0:** Backup gateway whitelist correction, popup UX optimization

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
