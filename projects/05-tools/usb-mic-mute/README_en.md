> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# USB Mic Mute — Microphone Mute Controller

![Tech](https://img.shields.io/badge/Tech-C%2B%2B%20%7C%20USB%20Protocol-red)
![Platform](https://img.shields.io/badge/Platform-Windows-blue)

## 📋 Project Overview

Windows desktop tool that implements hardware-level microphone muting via USB control, preventing applications from bypassing software mute.

**Project Type:** System Utility  
**Tech Stack:** C++, USB Protocol, Windows API

## ⚡ Core Features

### Hardware-Level Mute Control
- Bypass operating system audio layer
- Applications cannot unmute
- Physical-level privacy protection

### System Integration
- System tray icon
- Hotkey support
- Auto-start on boot
- Mute status indicator

### Device Management
- Multi-device support
- Device hot-plug handling
- Device status monitoring

## 💡 Technical Highlights

### Low-Level Hardware Control
- Direct device communication
- Hardware register operations
- Low-level system integration

### Security
- Administrator permission control
- Device access verification
- State integrity checking
- Anti-tampering mechanisms

### Performance Optimization
- Minimal resource footprint
- Background resident service
- Fast response time
- Seamless operation

## 🛠️ Tech Stack

**Core Technologies:**
- C++ core development
- USB protocol implementation
- Windows API integration

**Key Components:**
- System service programming
- Device driver interaction
- USB HID protocol handling

## 🔒 Privacy Protection

### Problems Solved
- Some applications automatically unmute software mute
- Meeting software may bypass system mute settings
- Malware activating microphone recording
- Privacy leak risks

### Hardware-Level Protection
- Physically disconnect microphone power or signal
- Application layer cannot bypass
- Survives system reboot
- Reliable privacy protection

## 📱 Application Scenarios

- Remote meeting mute control
- Privacy-sensitive environment protection
- Prevent accidental microphone activation
- Multi-user shared computer scenarios

## 🎯 Technical Challenges

**Cross-Device Compatibility:**
- Different USB microphone chip architectures
- Vendor-specific protocols
- Driver compatibility handling

**Low-Level Access:**
- Administrative privilege requirements
- USB device enumeration
- Direct hardware communication

**Stability & Reliability:**
- Hot-plug event handling
- Error recovery mechanisms
- Resource cleanup on exit

---

*Hardware control tool demonstrating USB protocol and low-level system integration.*
