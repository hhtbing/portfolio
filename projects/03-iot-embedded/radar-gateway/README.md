> [🏠 返回主页](https://github.com/hhtbing) | 中文 | [**English Documentation**](./README_en.md)

# AWRL6844 雷达网关系统 — 双 ESP32 架构物联网网关

![Tech](https://img.shields.io/badge/Tech-ESP32--P4%20%7C%20ESP32--C5%20%7C%20Node.js-yellow)
![Status](https://img.shields.io/badge/Status-Production-success)

## 📋 项目概述

本仓库是 AWRL6844EVM J5 雷达与 WT99P4C5-S1 J4 网关的主仓库。所有固件、Web 管理界面、部署脚本、发布包和文档均基于本仓库的 `main` 分支。

**项目类型：** 物联网网关系统  
**开发周期：** 2024-2026  
**芯片平台：** MediaTek MT7981（ESP32-P4 + ESP32-C5）

## 🏗️ 系统架构

```
AWRL6844EVM J5 雷达 / XDS110
        |
WT99P4C5-S1 J4 USB Host（ESP32-P4）
        |
板载 SDIO
        |
ESP32-C5：Wi-Fi / AP 配网 / TCP
        |
CLI 端口 41001 + 雷达数据 41002
        |
Web 网关 HTTP/WebSocket 40080
```

**P4 职责：** USB Host 和原始数据桥接  
**C5 职责：** Wi-Fi、AP 配网和 TCP 通信

雷达数据在 P4、C5 和 TCP 之间仅作为原始字节转发——无格式变换、无解析、无速率限制。

## ⚡ 核心功能

### 1. USB Host 集成
- ESP32-P4 USB Host 连接 AWRL6844EVM J5
- XDS110 CDC 接口：
  - MI_00：CLI（115200 波特率）
  - MI_03：雷达输出（1250000 波特率）
  - MI_02：XDS110 调试控制（仅目标复位）

### 2. Wi-Fi 配网
- AP 模式用于首次设置
- Web 界面地址 192.168.4.1
- Wi-Fi 扫描和配置
- 服务器地址和端口设置

### 3. TCP 桥接
- CLI 通道（端口 41001）
- 雷达数据通道（端口 41002）
- 健康检查通道
- 原始字节转发

### 4. Web 管理
- 设备注册
- 雷达复位控制
- 配置队列管理
- 实时数据流
- 数据包捕获

## 💡 技术亮点

### 双 ESP32 架构
- P4：USB Host + XDS110 CDC 处理
- C5：SDIO + Wi-Fi/TCP 网络
- 清晰的职责分离

### AP 配网机制
- 首次启动或 IO4/IO5 接地触发 AP 模式
- 开放 Wi-Fi 热点名称 `wisefidoXXXX`（MAC 地址后 4 位）
- Web 配置界面 192.168.4.1
- 自动生成设备 ID

### 原始数据转发
- 网关层不进行协议解析
- 直接字节转发以获得最大性能
- 保留原始 TI 雷达数据格式

## 🛠️ 技术栈

**固件：**
- ESP-IDF 6.0.2
- ESP32-P4（USB Host）
- ESP32-C5（Wi-Fi/TCP）
- C/C++

**Web 网关：**
- Node.js + Express
- WebSocket 实时数据
- 原生 HTML/CSS/JavaScript

**部署：**
- Docker 单容器
- GitHub Actions CI/CD
- 多架构镜像

## 📚 仓库结构

```
AWRL6844EVM_J5_link_WT99P4C5-S1_J4/
├── Firmware/
│   ├── p4_gateway/          # ESP32-P4 USB Host 固件
│   ├── c5_gateway/          # ESP32-C5 Wi-Fi/TCP 固件
│   └── common/              # 共享协议定义
├── Web/                     # Node.js 网关和管理界面
├── Server/                  # Docker 部署脚本
├── releases/firmware/       # 版本化固件二进制文件
└── docs/                    # 硬件兼容性和指南
```

## 🔗 设备连接

### 首次设置
1. 给 WT99P4C5-S1 J1 Type-C 供电
2. 将 AWRL6844EVM J5 Micro-USB 连接到 J4 USB Host
3. C5 启动时将 IO4 或 IO5 接地以进入 AP 模式
4. 连接到 Wi-Fi 热点 `wisefidoXXXX`
5. 打开 http://192.168.4.1 进行配置
6. 扫描并选择 Wi-Fi 网络
7. 输入服务器地址（默认：6844.yohan.fun）
8. 保存配置并等待设备重新连接

### 正常运行
- 保持 J1 供电和 J4 USB 数据连接
- C5 自动连接到服务器 CLI/Radar/Health 通道
- Web 面板雷达复位仅重置 TI 雷达，不重置 P4/C5

## 📊 项目状态

- ✅ 生产环境部署
- ✅ 稳定的固件版本
- ✅ Docker 部署就绪
- ✅ Web 管理界面
- ✅ 实时数据流

## 🎯 应用场景

- 雷达数据采集与传输
- 物联网设备管理
- 嵌入式系统开发

---

*本网关系统展示了嵌入式开发、USB Host 实现和物联网设备管理能力。*
