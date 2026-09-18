> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# OwlCare - Smart Health Monitoring System

![Status](https://img.shields.io/badge/Status-Production-success)
![Tech](https://img.shields.io/badge/Tech-Android%20%7C%20iOS%20%7C%20BLE-green)

## 📋 Project Overview

OwlCare is a comprehensive multi-platform health monitoring product repository, centrally maintaining Android, iOS, device configuration tools, proxy bridge tools, upgrade release backend, CI/CD workflows, and project documentation.

This repository is oriented toward actual product delivery, not a single application template.

**Project Type:** Multi-Platform Mobile Application  
**Development Period:** 2023-Present  
**Team Size:** Team Project  
**Project Status:** Production with Active Users

## 🎯 System Components

| Module | Path | Tech Stack | Main Responsibilities |
|--------|------|-----------|----------------------|
| OwlCare Android | `project-code/Android_OwlCare_google_play` | Kotlin, Jetpack Compose, Hilt | Main Android app with login, monitoring, alerts, radar, sleep, settings, device config, and Google Play updates |
| OwlCare iOS | `project-code/ios-owlCare-update` | Swift, UIKit, CocoaPods | iPhone & Apple Watch clients with cross-platform interaction |
| ConfigureTool | `project-code/ConfigureTool` | Kotlin, Jetpack Compose, BLE/Wi-Fi SDK | Independent device configuration tool for QR scanning, BLE discovery, and Wi-Fi provisioning |
| OwlProxyBridge | `project-code/OwlProxyBridge` | Java, Android SDK | Android proxy bridge tool; formal builds via GitHub Actions |
| OwlCare Update Hub | `project-code/OwlCareUpdateHub` | Python, FastAPI, Uvicorn, Docker | APK release, self-hosted updates, Google Play handoff, sensitive release assets, and audit management |

## 🏗️ Product & Release Architecture

```
User → OwlCare Android/iOS
         ↓
    Business API
         ↓
  Google Play / Update Hub
         ↓
    Device (BLE/Wi-Fi)
```

Current Android main app uses package name `com.wisefido.owlmonitor`, with Google Play as the primary release channel. Update Hub handles self-hosted updates, release information sync, backend configuration, and audit responsibilities.

## ⚡ Core Features

### Android Application

### iOS Application

### Device Configuration

### OTA System

## 🛠️ Tech Stack Details

### Android
- `compileSdk 35`, `targetSdk 35`, `minSdk 26`, JDK 17

### iOS

### Update Hub
- Multi-architecture images via GitHub Container Registry

## 💡 Design Decisions

This combination extends the repository's existing architecture:
- Mobile maintains native experience and device capabilities
- Release backend uses lightweight Python service to reduce deployment complexity
- Independent tools separated by device access boundaries
- Avoids coupling all capabilities into the main app

## 🔗 Release Channels

- **GitHub Actions:** Automated builds and releases

---

*This is a production mobile health monitoring system demonstrating native app development, BLE integration, and self-hosted OTA management.*
