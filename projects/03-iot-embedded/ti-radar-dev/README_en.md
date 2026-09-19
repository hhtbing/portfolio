> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# TI mmWave Radar Development Platform

![Status](https://img.shields.io/badge/Status-Archive-lightgrey)
![Tech](https://img.shields.io/badge/Tech-TI%20SDK%20%7C%20Python%20%7C%20C-blue)

## 📋 Project Overview

Complete development platform and toolchain based on TI mmWave radar chips. This project represents the early-stage technical accumulation of radar development, encompassing a complete toolchain system from hardware configuration and firmware development to data processing.

**Project Type:** Embedded Development Platform + Toolchain  
**Technical Domain:** mmWave Radar, Embedded Systems, Signal Processing  
**Status:** Archived (Technical Reference)

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                TI Radar Development Platform                 │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ Radar Config  │    │ Firmware Dev  │    │ Data Process  │
│     Tools     │    │     Tools     │    │     Tools     │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
   Parameter            Firmware Flash        Signal Process
   Configuration        Version Control       Data Visualize
   Performance Tune     Debug Tools          Algorithm Test
   Scene Adaptation
```

---

## 🛠️ Core Toolchain

### 1. Radar Configuration Tools
- **Config Generator** - Auto-generate radar parameter configuration files
- **Performance Tuning** - Parameter optimization and performance testing
- **Scene Adaptation** - Parameter adjustment for different application scenarios
- **Config Validator** - Parameter legality check and conflict detection

### 2. Firmware Development Tools
- **Firmware Flasher** - Support batch flashing and version management
- **Serial Debug Tool** - Real-time log monitoring and command interaction
- **Firmware Packager** - Automated build and release process
- **Version Management** - Firmware version tracking and rollback mechanism

### 3. Data Processing Tools
- **Data Acquisition** - Capture and store raw radar data
- **Signal Processing Engine** - FFT, point cloud processing, target detection
- **Data Visualization** - Real-time waveform display and trajectory tracking
- **Algorithm Validation** - Offline data playback and algorithm testing

---

## 🎯 Technical Highlights

### Complete Development Toolchain
- Covers the entire development process from hardware configuration to data processing
- High automation level, lowering development barriers
- Modular design, tools can be used independently

### Multi-Scenario Adaptation
- Supports multiple application scenarios: human detection, gesture recognition, vital sign monitoring
- Quick parameter configuration and tuning tools
- Scenario template library for rapid reuse of mature solutions

### Data Processing Pipeline
- Real-time data acquisition and processing
- Complete signal processing algorithm library
- Visualization debugging and validation tools

### Engineering Practices
- Automated build and deployment
- Version management and rollback mechanisms
- Comprehensive logging and debugging support

---

## 🛠️ Tech Stack

**Hardware Platform:**
- TI mmWave radar chips
- DSP signal processing unit
- Serial communication interface

**Development Tools:**
- TI SDK and toolchain
- Python (tool development)
- C/C++ (firmware development)

**Data Processing:**
- NumPy, SciPy (signal processing)
- Matplotlib (data visualization)
- Custom algorithm library

---

## 📊 Technical Evolution

This project laid the technical foundation for the subsequent **AWRL6844 Radar Gateway System**, including:
- Radar configuration methodology
- Firmware development workflow
- Data processing algorithms
- Toolchain design philosophy

---

## 🔗 Related Projects

- [AWRL6844 Radar Gateway](../radar-gateway/README_en.md) - Next-generation radar system

---

*This project showcases a complete mmWave radar development toolchain system, retained as technical accumulation and reference.*
