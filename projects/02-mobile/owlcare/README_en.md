> [🏠 Back to Profile](https://github.com/hhtbing/blob/main/README_en.md) | [**中文文档**](./README.md) | English

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
- Native Material 3 design with Jetpack Compose
- Real-time monitoring dashboard
- Alert system with FCM push notifications
- Radar data visualization
- Sleep quality analysis
- Device configuration and management
- Biometric authentication
- Google Play in-app updates

### iOS Application
- Native UIKit interface
- iPhone and Apple Watch support
- HealthKit integration
- Real-time data synchronization
- Push notifications

### Device Configuration
- QR code scanning for device discovery
- BLE device discovery and pairing
- Wi-Fi provisioning
- Device parameter configuration

### OTA System
- Self-hosted update backend
- APK version management
- Release approval workflow
- Update statistics and audit logs

## 🛠️ Tech Stack Details

### Android
- Android Gradle Plugin + Gradle Kotlin DSL
- Kotlin, Jetpack Compose, Material 3
- Hilt dependency injection
- Retrofit, OkHttp, SSE, Kotlin Serialization
- DataStore, Security Crypto, Biometric
- BLE, Wi-Fi provisioning SDK
- `compileSdk 35`, `targetSdk 35`, `minSdk 26`, JDK 17

### iOS
- Swift with UIKit
- CocoaPods dependency management
- Moya, Kingfisher, SnapKit
- iPhone and Apple Watch projects
- Minimum platform iOS 18

### Update Hub
- FastAPI + Uvicorn
- Native HTML/CSS/JavaScript admin backend
- JSON and mounted directory persistence
- Docker single-container deployment
- Multi-architecture images via GitHub Container Registry

## 💡 Design Decisions

This combination extends the repository's existing architecture:
- Mobile maintains native experience and device capabilities
- Release backend uses lightweight Python service to reduce deployment complexity
- Independent tools separated by device access boundaries
- Avoids coupling all capabilities into the main app

## 📚 Quick Start

### Environment Requirements
- Git, JDK 17
- Android Studio or available Android SDK
- macOS + Xcode + CocoaPods (iOS only)
- Python 3.11+ (Update Hub local development)
- Docker (Update Hub verification/deployment)

### Clone Repository
```bash
git clone [repository-url]
cd OwlMonitor_app
```

### Build Android
```bash
cd project-code/Android_OwlCare_google_play
./gradlew assembleDebug
```

### Build iOS
```bash
cd project-code/ios-owlCare-update
pod install
open OwlCare.xcworkspace
```

## 🔗 Release Channels

- **Google Play:** Primary distribution channel
- **Update Hub:** Self-hosted updates and testing
- **GitHub Actions:** Automated builds and releases

---

*This is a production mobile health monitoring system demonstrating native app development, BLE integration, and self-hosted OTA management.*
