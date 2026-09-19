> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# OwlCare — Smart Health Monitoring System

![Status](https://img.shields.io/badge/Status-Production-success)
![Tech](https://img.shields.io/badge/Tech-Android%20%7C%20BLE-green)

## 📋 Project Overview

OwlCare is a smart health monitoring system. **I am primarily responsible for Android application development**, including independent device configuration tools, proxy bridge tools, and self-hosted OTA upgrade backend. The iOS version is referenced for cross-platform learning and comparison.

This repository centrally maintains development achievements and technical documentation for multiple subsystems.

**Project Type:** Mobile Application Ecosystem  
**Development Cycle:** 2023-Present  
**My Responsibilities:** Android Development + Tools Development + OTA Backend  
**Project Status:** Production, Live on Google Play

🔗 **Google Play:** https://play.google.com/store/apps/details?id=com.wisefido.owlmonitor

## 🎯 System Components

| Module | Tech Stack | My Work |
|--------|-----------|---------|
| **OwlCare Android** | Kotlin, Jetpack Compose, Hilt | ✅ Primary Development: Login, monitoring, alerts, radar data visualization, sleep analysis, device configuration, Google Play update integration |
| **ConfigureTool** | Kotlin, Jetpack Compose, BLE/Wi-Fi SDK | ✅ Independent Development: QR code scanning, BLE device discovery, Wi-Fi provisioning tool |
| **OwlProxyBridge** | Java, Android SDK | ✅ Development: Protocol bridge and data forwarding, automated builds via GitHub Actions |
| **Update Hub** | Python, FastAPI, Uvicorn, Docker | ✅ Setup: Self-hosted APK release system, version management, update auditing |
| OwlCare iOS | Swift, UIKit | 📖 Learning Reference: Compare iOS development patterns and UX design |

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     OwlCare System                           │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ Android App   │    │ Config Tool   │    │ OTA Backend   │
│ (Google Play) │    │ (Standalone)  │    │ (Update Hub)  │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
Real-time Monitor    Device Provisioning    Version Mgmt
Data Visualization   BLE/Wi-Fi Config       Auto Updates
Push Notifications   QR Code Scanning       Audit Logs
```

## ⚡ Core Features

### Android Application
- **Real-time Monitoring Dashboard** - Multi-dimensional health data display
- **Smart Alert System** - FCM push notifications for real-time anomaly alerts
- **Radar Data Visualization** - Real-time charts for mmWave radar data
- **Sleep Quality Analysis** - Sleep monitoring and quality assessment
- **Device Configuration Management** - Device binding and parameter setup
- **Biometric Authentication** - Fingerprint/face recognition login

### Independent Configuration Tool (ConfigureTool)
- **QR Code Scanning** - Quick device identification and binding
- **BLE Device Discovery** - Auto-scan nearby Bluetooth devices
- **Wi-Fi Provisioning** - One-click device network configuration
- **Parameter Configuration** - Device working parameter setup

### Proxy Bridge Tool (OwlProxyBridge)
- **Protocol Conversion** - Bridge device protocols to standard APIs
- **Data Forwarding** - Real-time data stream forwarding
- **Automated Builds** - GitHub Actions CI/CD

### OTA Upgrade Backend (Update Hub)
- **Version Management** - APK version control and release management
- **Self-hosted Updates** - Internal test version distribution
- **Google Play Integration** - Coordinated formal version releases
- **Update Auditing** - Complete update logs and audit trails

## 💡 Technical Highlights

### Android Development
- **Jetpack Compose** - Modern declarative UI
- **Hilt Dependency Injection** - Modular architecture
- **Room Database** - Local data persistence
- **Kotlin Coroutines** - Asynchronous programming and reactive data streams

### BLE Communication
- **Device Discovery and Pairing** - Low-energy Bluetooth device management
- **Real-time Data Transfer** - Efficient BLE data channels
- **Wi-Fi Provisioning** - Hybrid BLE + Wi-Fi provisioning solution

### OTA System
- **Automated Builds** - GitHub Actions build pipeline
- **Version Control** - Semantic versioning
- **Incremental Updates** - Reduced update package size
- **Rollback Mechanism** - Auto-revert on update failure

## 🛠️ Tech Stack Details

**Android Development:**
- Kotlin (Primary Language)
- Jetpack Compose (UI Framework)
- Hilt (Dependency Injection)
- Room (Database)
- Retrofit + OkHttp (Networking)
- Firebase Cloud Messaging (Push Notifications)

**BLE & Device Communication:**
- Android BLE API
- Wi-Fi Direct / Wi-Fi Provisioning
- Custom Communication Protocols

**OTA Backend:**
- Python + FastAPI
- Uvicorn (ASGI Server)
- Docker (Containerized Deployment)
- SQLite (Version Database)

**Development Tools:**
- Android Studio
- Git + GitHub Actions
- Postman (API Testing)

## 📱 Application Architecture

### Android Main App Modules
```
app/
├── ui/              # Jetpack Compose UI layer
├── viewmodel/       # MVVM ViewModel
├── repository/      # Data repository layer
├── data/            # Data models and data sources
├── network/         # Network requests
├── ble/             # BLE communication
├── util/            # Utility classes
└── di/              # Hilt dependency injection
```

### Configuration Tool (ConfigureTool)
```
configuretool/
├── scanner/         # QR code scanning
├── ble/             # BLE device discovery
├── wifi/            # Wi-Fi provisioning
└── ui/              # Standalone UI
```

## 🎯 Development Focus

### Core Modules I Developed
1. **Android Main App** - Complete mobile development
2. **ConfigureTool** - Independent configuration tool design and implementation
3. **OwlProxyBridge** - Protocol bridging and data forwarding
4. **Update Hub** - Self-hosted OTA upgrade system

### Learning Reference
- iOS version for cross-platform development comparison
- Learning Swift and iOS development patterns

## 🔗 Related Links

- **Google Play Download:** https://play.google.com/store/apps/details?id=com.wisefido.owlmonitor
- **Package Name:** com.wisefido.owlmonitor

## 💼 My Responsibilities Summary

- ✅ Complete Android main app development
- ✅ BLE device provisioning tool development
- ✅ Proxy bridge tool development
- ✅ Self-hosted OTA upgrade backend setup
- 📖 iOS version reference learning

---

*This project demonstrates complete technical capabilities in Android app development, BLE communication, and self-hosted OTA systems.*
