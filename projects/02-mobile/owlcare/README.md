> 🏠 [返回主页](https://github.com/hhtbing) | **中文** / [English](./README_en.md)

# OwlCare — 智能监护系统

![状态](https://img.shields.io/badge/状态-生产环境-success)
![技术](https://img.shields.io/badge/技术-Android%20%7C%20BLE-green)

## 📋 项目概览

OwlCare 是一个智能健康监护系统，**本人主要负责 Android 应用开发**，包含独立设备配置工具、代理桥接工具和自建 OTA 升级后台。iOS 版本作为参考对比学习。

本仓库集中维护多个子系统的开发成果和技术文档。

**项目类型：** 移动应用生态系统  
**开发周期：** 2023 年至今  
**本人职责：** Android 应用开发 + 工具开发 + OTA 后台  
**项目状态：** 生产环境，已上线 Google Play

🔗 **Google Play:** https://play.google.com/store/apps/details?id=com.wisefido.owlmonitor

## 🎯 系统组件

| 模块 | 技术栈 | 本人工作 |
|------|--------|---------|
| **OwlCare Android** | Kotlin, Jetpack Compose, Hilt | ✅ 主要开发：登录、监护、告警、雷达数据可视化、睡眠分析、设备配置、Google Play 更新集成 |
| **ConfigureTool** | Kotlin, Jetpack Compose, BLE/Wi-Fi SDK | ✅ 独立开发：二维码扫描、BLE 设备发现、Wi-Fi 配网工具 |
| **OwlProxyBridge** | Java, Android SDK | ✅ 开发：代理桥接工具，通过 GitHub Actions 自动构建 |
| **Update Hub** | Python, FastAPI, Uvicorn, Docker | ✅ 搭建：自托管 APK 发布系统、版本管理、更新审计 |
| OwlCare iOS | Swift, UIKit | 📖 参考学习：对比 iOS 开发模式和用户体验设计 |

## 🏗️ 系统架构

```
┌─────────────────────────────────────────────────────────────┐
│                     OwlCare 系统                             │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ Android 主应用 │    │ 配置工具      │    │ OTA 后台      │
│ (Google Play) │    │ (独立 APK)    │    │ (Update Hub)  │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
   实时监护            设备配网            版本管理
   数据可视化          BLE/Wi-Fi          自动更新
   推送通知            二维码扫描          审计日志
```

## ⚡ 核心功能

### Android 主应用
- **实时监护仪表板** - 多维度健康数据展示
- **智能告警系统** - FCM 推送通知，实时异常提醒
- **雷达数据可视化** - 毫米波雷达数据实时图表
- **睡眠质量分析** - 睡眠监测和质量评估
- **设备配置管理** - 设备绑定、参数设置
- **生物识别认证** - 指纹/面部识别登录

### 独立配置工具 (ConfigureTool)
- **二维码扫描** - 快速设备识别和绑定
- **BLE 设备发现** - 自动扫描附近蓝牙设备
- **Wi-Fi 配网** - 一键完成设备网络配置
- **参数配置** - 设备工作参数设置

### 代理桥接工具 (OwlProxyBridge)
- **协议转换** - 设备协议到标准 API 的桥接
- **数据转发** - 实时数据流转发
- **自动构建** - GitHub Actions CI/CD

### OTA 升级后台 (Update Hub)
- **版本管理** - APK 版本控制和发布管理
- **自托管更新** - 内部测试版本分发
- **Google Play 集成** - 正式版本发布协调
- **更新审计** - 完整的更新日志和审计追踪

## 💡 技术亮点

### Android 开发
- **Jetpack Compose** - 现代化声明式 UI
- **Hilt 依赖注入** - 模块化架构
- **Room 数据库** - 本地数据持久化
- **Kotlin Coroutines** - 异步编程和流式数据处理

### BLE 通信
- **设备发现和配对** - 低功耗蓝牙设备管理
- **数据实时传输** - 高效的 BLE 数据通道
- **Wi-Fi 配网** - BLE + Wi-Fi 混合配网方案

### OTA 系统
- **自动化构建** - GitHub Actions 构建流水线
- **版本控制** - 语义化版本管理
- **增量更新** - 减少更新包大小
- **回滚机制** - 更新失败自动回退

## 🛠️ 技术栈详情

**Android 开发：**
- Kotlin (主语言)
- Jetpack Compose (UI 框架)
- Hilt (依赖注入)
- Room (数据库)
- Retrofit + OkHttp (网络请求)
- Firebase Cloud Messaging (推送通知)

**BLE & 设备通信：**
- Android BLE API
- Wi-Fi Direct / Wi-Fi Provisioning
- 自定义通信协议

**OTA 后台：**
- Python + FastAPI
- Uvicorn (ASGI 服务器)
- Docker (容器化部署)
- SQLite (版本数据库)

**开发工具：**
- Android Studio
- Git + GitHub Actions
- Postman (API 测试)

## 📱 应用架构

### Android 主应用模块
```
app/
├── ui/              # Jetpack Compose UI 层
├── viewmodel/       # MVVM ViewModel
├── repository/      # 数据仓库层
├── data/            # 数据模型和数据源
├── network/         # 网络请求
├── ble/             # BLE 通信
├── util/            # 工具类
└── di/              # Hilt 依赖注入
```

### 配置工具 (ConfigureTool)
```
configuretool/
├── scanner/         # 二维码扫描
├── ble/             # BLE 设备发现
├── wifi/            # Wi-Fi 配网
└── ui/              # 独立 UI
```

## 🎯 开发重点

### 我负责开发的核心模块
1. **Android 主应用** - 完整的移动端开发
2. **ConfigureTool** - 独立配置工具设计和实现
3. **OwlProxyBridge** - 协议桥接和数据转发
4. **Update Hub** - 自建 OTA 升级系统

### 学习参考
- iOS 版本用于对比学习跨平台开发差异
- 学习 Swift 和 iOS 开发模式

## 🔗 相关链接

- **Google Play 下载：** https://play.google.com/store/apps/details?id=com.wisefido.owlmonitor
- **包名：** com.wisefido.owlmonitor

## 💼 本人职责总结

- ✅ Android 主应用完整开发
- ✅ BLE 设备配网工具开发
- ✅ 代理桥接工具开发
- ✅ 自建 OTA 升级后台搭建
- 📖 iOS 版本参考学习

---

*本项目展示了 Android 应用开发、BLE 通信、自建 OTA 系统的完整技术能力。*
