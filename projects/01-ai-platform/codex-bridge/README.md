> [🏠 返回主页](https://github.com/hhtbing/blob/main/README.md) | 中文 | [**English Documentation**](./README_en.md)

# Codex Host Bridge — 远程开发桥接

> 中文 | [**English Documentation**](./README_en.md)

![平台](https://img.shields.io/badge/平台-Windows-lightblue)
![技术](https://img.shields.io/badge/技术-C%23%20%7C%20WPF%20%7C%20WebSocket-orange)

## 📋 项目概览

Codex Host Bridge 是运行在 Windows 宿主机上的 WPF 桌面应用，用于将远程 Codex 客户端（Linux、macOS 或其他 Windows 节点）连接到本地 Codex App Server。远程节点通过 Tailnet 连接到 Bridge Gateway，经 Gateway 转发后，在 Windows 宿主机配置的项目目录中创建和操作 Codex 会话。

**当前基线：** v0.4.40  
**项目类型：** 开发工具平台  
**开发周期：** 2024-2025  
**项目状态：** 生产使用

## 🎯 为什么需要这个项目

Windows 桌面 Codex 可以 SSH 到其他主机，实现从 Windows 到远程主机的运维操作。但也存在反向需求：让 Linux 或 macOS 的 Codex 客户端加入 Windows 宿主的项目上下文。

本项目提供了这个反向通道：

```
远程 Codex 客户端
        |
        | Tailnet WebSocket
        ↓
Windows Codex Host Bridge Gateway
        |
        | 本地回环转发
        ↓
Windows Codex App Server
        |
        ↓
Windows 宿主项目目录
```

## ⚡ 核心特性

### 1. 管理 Windows Codex 服务
- 发现和启动本地 Codex App Server
- 维护生命周期和就绪状态
- 处理启动、停止、重启、端口冲突

### 2. 提供远程业务入口
- 在 Windows Tailnet 地址上监听远程 WebSocket 连接
- 将已连接节点的连接转发到本地 App Server
- 维护连接数、节点连接数、活动追踪

### 3. 维护节点准入状态
- 显示节点名称、主机名、Tailnet 地址、平台
- Gateway 会话、App Server 状态、项目状态
- Allow/Deny 准入模型

### 4. Linux 节点永久代理
- 统一的 Linux 入驻材料
- 通过 systemd 服务实现永久代理
- 连接报告和验证脚本

## 🏗️ 系统架构

### 组件关系

```
远程节点（Linux/macOS）
        ↓
  永久代理
        ↓
Windows Tailnet Gateway
        ↓
Windows Codex App Server
        ↓
Windows 项目目录
```

### 关键技术

- **WPF：** 桌面应用 UI
- **WebSocket：** 节点通信协议
- **Tailscale：** 私有网络连接
- **systemd：** Linux 节点服务管理

## 💡 技术亮点

- 跨平台远程开发支持
- 基于会话的连接转发
- 节点准入和访问控制
- 状态观测和只读导出
- 支持 Linux 节点永久连接

## 🛠️ 技术栈

- C# / .NET
- WPF (Windows Presentation Foundation)
- WebSocket
- Tailscale
- systemd（用于 Linux 节点）

## 📚 仓库结构

```
Codex-Host-Bridge/
├── src/CodexHostBridge/       # Windows WPF Bridge 主程序
├── nodes/linux/               # Linux 节点入驻材料
├── docs/testing/              # 测试计划和验收证据
├── docs/release/              # 版本发布记录
├── docs/plans/                # 项目计划和结案记录
├── docs/integration/          # AgentMeshOS 状态契约
└── artifacts/releases/        # 发布程序和验证材料
```

## 🔗 相关链接

- Windows Bridge：用于 Codex 服务管理的桌面应用
- Linux 节点代理：通过 systemd 服务实现永久连接

---

*这个工具桥接了不同操作系统的开发环境，实现远程 AI 辅助开发工作流。*
