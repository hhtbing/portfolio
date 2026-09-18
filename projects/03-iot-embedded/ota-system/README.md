> 🏠 [返回主页](https://github.com/hhtbing) | **中文** / [English](./README_en.md)

# OTA-QL — 雷达 OTA 管理系统

> 中文 | [**English Documentation**](./README_en.md)

![状态](https://img.shields.io/badge/状态-生产环境-success)
![技术](https://img.shields.io/badge/技术-Go%20%7C%20MQTT%20%7C%20TCP-red)

## 📋 项目概览

OTA-QL 是面向雷达设备的完整 OTA（空中升级）固件管理系统，支持 TCP 和 MQTT(S) 远程固件升级协议。

**当前版本：** V20.1  
**项目类型：** 物联网管理系统  
**开发周期：** 2024-2026  
**项目状态：** 生产环境，管理 500+ 设备

## ⚡ 核心特性

### 1. 双协议支持
- TCP V2 协议，直连设备
- MQTT(S) 协议，支持 Broker
- 自动协议切换和回退

### 2. 批量固件管理
- 支持最多 500 设备批量推送
- Worker 池，10 并发上传
- Push pacer 流控（最多 15 并发下载）
- 大批次自动排队

### 3. 桌面监控工具
- 实时设备列表，虚拟滚动
- OTA 进度追踪和状态显示
- 实时固件烧录日志
- 批量操作支持

### 4. 安全保护
- 设备黑名单管理
- 自动设备注销
- 拦截日志持久化
- 网关地址白名单

### 5. Web 管理面板
- 设备注册和管理
- 固件版本控制
- OTA 推送接口
- 实时进度监控
- 用户认证和授权

## 🏗️ 系统架构

### 核心组件

| 组件 | 技术 | 职责 |
|------|------|------|
| Go Server | Go + cmux | 设备网关、HTTPS API、MQTT broker |
| Web Panel | HTML/CSS/JS | 管理界面 |
| Monitor Tool | Python/PySide6 | 桌面监控和批量操作 |
| Device Protocol | TCP/MQTT + Protobuf | 设备通信 |

### 数据流

```
设备（TCP/MQTT）
      ↓
  cmux 网关
      ↓
  OTA 服务
      ↓
  固件存储
      ↓
  Web 面板 / 监控工具
```

## 💡 技术亮点

### 1. 高并发处理
- 流控防止网络拥塞
- Worker 池管理并发上传
- 队列机制处理大批次

### 2. 协议灵活性
- TCP 和 MQTT 双协议
- 自动切换和回退
- Protobuf 高效序列化

### 3. 生产级监控
- 实时设备状态
- 进度追踪
- 日志持久化
- 安全防护

## 🛠️ 技术栈

**后端：**
- Go 1.21+
- cmux（多路复用）
- MQTT broker
- Protobuf

**前端：**
- HTML/CSS/JavaScript
- 原生 Web 界面

**监控工具：**
- Python 3.11+
- PySide6
- 虚拟滚动列表

**基础设施：**
- Docker
- Nginx
- SQLite

## 📚 仓库结构

```
ota/
├── server/          # Go OTA 服务
├── web/             # Web 管理面板
├── monitor/         # 桌面监控工具
├── device/          # 设备端协议
└── docs/            # 文档和部署指南
```

## 🚀 快速开始

### 构建 Go 服务

```bash
cd server
go build -o ota-server
./ota-server
```

### 运行监控工具

```bash
cd monitor
pip install -r requirements.txt
python main.py
```

## 🔗 相关链接

- Go OTA 服务：设备网关和管理 API
- 桌面监控工具：批量操作和实时监控
- Web 管理面板：固件版本和设备管理

---

*这是一个生产环境的 OTA 管理系统，展示了高并发处理、双协议支持和批量固件管理能力。*
