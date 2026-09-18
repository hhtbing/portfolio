> 🏠 [返回主页](https://github.com/hhtbing) | **中文** / [English](./README_en.md)

# OwlCare — 智能监护系统

> 中文 | [**English Documentation**](./README_en.md)

![状态](https://img.shields.io/badge/状态-生产环境-success)
![技术](https://img.shields.io/badge/技术-Android%20%7C%20iOS%20%7C%20BLE-green)

## 📋 项目概览

OwlCare 是一个综合性多平台健康监护产品仓库，集中维护 Android、iOS、设备配置工具、代理桥接工具、升级发布后台、CI/CD 工作流和项目文档。

本仓库面向实际产品交付，而非单一应用模板。

**项目类型：** 多平台移动应用  
**开发周期：** 2023 年至今  
**团队规模：** 团队项目  
**项目状态：** 生产环境，有活跃用户

## 🎯 系统组件

| 模块 | 路径 | 技术栈 | 主要职责 |
|------|------|--------|---------|
| OwlCare Android | `project-code/Android_OwlCare_google_play` | Kotlin, Jetpack Compose, Hilt | Android 主应用，包含登录、监护、告警、雷达、睡眠、设置、设备配置和 Google Play 更新 |
| OwlCare iOS | `project-code/ios-owlCare-update` | Swift, UIKit, CocoaPods | iPhone 和 Apple Watch 客户端，支持跨平台交互 |
| ConfigureTool | `project-code/ConfigureTool` | Kotlin, Jetpack Compose, BLE/Wi-Fi SDK | 独立设备配置工具，支持二维码扫描、BLE 发现和 Wi-Fi 配网 |
| OwlProxyBridge | `project-code/OwlProxyBridge` | Java, Android SDK | Android 代理桥接工具，通过 GitHub Actions 正式构建 |
| OwlCare Update Hub | `project-code/OwlCareUpdateHub` | Python, FastAPI, Uvicorn, Docker | APK 发布、自托管更新、Google Play 交接、敏感发布资产和审计管理 |

## 🏗️ 产品与发布架构

```
用户 → OwlCare Android/iOS
         ↓
    业务 API
         ↓
  Google Play / Update Hub
         ↓
    设备（BLE/Wi-Fi）
```

当前 Android 主应用使用包名 `com.wisefido.owlmonitor`，以 Google Play 作为主要发布渠道。Update Hub 处理自托管更新、发布信息同步、后台配置和审计职责。

## ⚡ 核心特性

### Android 应用
- 原生 Material 3 设计，使用 Jetpack Compose
- 实时监护仪表板
- 告警系统，带 FCM 推送通知
- 雷达数据可视化
- 睡眠质量分析
- 设备配置和管理
- 生物识别认证
- Google Play 应用内更新

### iOS 应用
- 原生 UIKit 界面
- iPhone 和 Apple Watch 支持
- HealthKit 集成
- 实时数据同步
- 推送通知

### 设备配置
- 二维码扫描设备发现
- BLE 设备发现和配对
- Wi-Fi 配网
- 设备参数配置

### OTA 系统
- 自托管更新后台
- APK 版本管理
- 发布审批流程
- 更新统计和审计日志

## 🛠️ 技术栈详情

### Android
- Android Gradle Plugin + Gradle Kotlin DSL
- Kotlin, Jetpack Compose, Material 3
- Hilt 依赖注入
- Retrofit, OkHttp, SSE, Kotlin Serialization
- DataStore, Security Crypto, Biometric
- BLE, Wi-Fi 配网 SDK
- `compileSdk 35`, `targetSdk 35`, `minSdk 26`, JDK 17

### iOS
- Swift with UIKit
- CocoaPods 依赖管理
- Moya, Kingfisher, SnapKit
- iPhone 和 Apple Watch 项目
- 最低平台 iOS 18

### Update Hub
- FastAPI + Uvicorn
- 原生 HTML/CSS/JavaScript 管理后台
- JSON 和挂载目录持久化
- Docker 单容器部署
- 通过 GitHub Container Registry 提供多架构镜像

## 💡 设计决策

此组合扩展了仓库的现有架构：
- 移动端保持原生体验和设备能力
- 发布后台使用轻量级 Python 服务以降低部署复杂度
- 独立工具按设备访问边界分离
- 避免将所有能力耦合到主应用

## 📚 快速开始

### 环境要求
- Git, JDK 17
- Android Studio 或可用的 Android SDK
- macOS + Xcode + CocoaPods（仅限 iOS）
- Python 3.11+（Update Hub 本地开发）
- Docker（Update Hub 验证/部署）

### 克隆仓库
```bash
git clone [repository-url]
cd OwlMonitor_app
```

### 构建 Android
```bash
cd project-code/Android_OwlCare_google_play
./gradlew assembleDebug
```

### 构建 iOS
```bash
cd project-code/ios-owlCare-update
pod install
open OwlCare.xcworkspace
```

## 🔗 发布渠道

- **Google Play：** 主要分发渠道
- **Update Hub：** 自托管更新和测试
- **GitHub Actions：** 自动化构建和发布

---

*这是一个生产环境的移动健康监护系统，展示了原生应用开发、BLE 集成和自托管 OTA 管理。*
