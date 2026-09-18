> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# Codex Host Bridge - Remote Development Bridge

![Platform](https://img.shields.io/badge/Platform-Windows-lightblue)
![Tech](https://img.shields.io/badge/Tech-C%23%20%7C%20WPF%20%7C%20WebSocket-orange)

## 📋 Project Overview

Codex Host Bridge is a WPF desktop application running on Windows hosts, designed to connect remote Codex clients (Linux, macOS, or other Windows nodes) to the local Codex App Server. Remote nodes connect to the Bridge Gateway via Tailnet, and after forwarding through the Gateway, create and operate Codex sessions in the Windows host's configured project directory.

**Current Baseline:** v0.4.40  
**Project Type:** Development Tool Platform  
**Development Period:** 2024-2025  
**Project Status:** Production Use

## 🎯 Why This Project

Windows desktop Codex can SSH to other hosts, enabling maintenance operations from Windows to remote hosts. However, there's also a need for the reverse direction: allowing Linux or macOS Codex clients to join Windows host's project context.

This project provides that reverse channel:

```
Remote Codex Client
        |
        | Tailnet WebSocket
        ↓
Windows Codex Host Bridge Gateway
        |
        | Local loopback forwarding
        ↓
Windows Codex App Server
        |
        ↓
Windows Host Project Directory
```

## ⚡ Core Features

### 1. Manage Windows Codex Services
- Discover and start local Codex App Server
- Maintain lifecycle and readiness state
- Handle startup, stop, restart, port conflicts

### 2. Provide Remote Business Entry
- Listen for remote WebSocket connections on Windows Tailnet address
- Forward connected node connections to local App Server
- Maintain connection count, node connection count, activity tracking

### 3. Maintain Node Access Status
- Display node name, hostname, Tailnet address, platform
- Gateway sessions, App Server status, project status
- Allow/Deny admission model

### 4. Linux Node Permanent Proxy
- Unified Linux onboarding materials
- Permanent proxy with systemd service
- Connection reports and verification scripts

## 🏗️ System Architecture

### Component Relationships

```
Remote Node (Linux/macOS)
        ↓
  Permanent Proxy
        ↓
Windows Tailnet Gateway
        ↓
Windows Codex App Server
        ↓
Windows Project Directory
```

### Key Technologies

- **WPF:** Desktop application UI
- **WebSocket:** Node communication protocol
- **Tailscale:** Private network connectivity
- **systemd:** Linux node service management

## 💡 Technical Highlights

- Cross-platform remote development support
- Session-based connection forwarding
- Node admission and access control
- Status observation and read-only export
- Support for permanent Linux node connection

## 🛠️ Tech Stack

- C# / .NET
- WPF (Windows Presentation Foundation)
- WebSocket
- Tailscale
- systemd (for Linux nodes)

## 📚 Repository Structure

```
Codex-Host-Bridge/
├── src/CodexHostBridge/       # Windows WPF Bridge main program
├── nodes/linux/               # Linux node onboarding materials
├── docs/testing/              # Test plans and acceptance evidence
├── docs/release/              # Version release records
├── docs/plans/                # Project plans and closure records
├── docs/integration/          # AgentMeshOS state contract
└── artifacts/releases/        # Release programs and verification materials
```

## 🔗 Related Links

- Windows Bridge: Desktop application for Codex service management
- Linux Node Proxy: Permanent connection via systemd service

---

*This tool bridges development environments across different operating systems and enables remote AI-assisted development workflows.*
