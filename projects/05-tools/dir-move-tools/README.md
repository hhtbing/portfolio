# DIR-MOVE-TOOLS - Windows Directory Migration

![Platform](https://img.shields.io/badge/Platform-Windows-lightblue)
![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20Tkinter%20%7C%20PyInstaller-blue)

## 📋 Project Overview

Windows desktop tool for migrating AppData and large directories using symbolic links (directory junctions), with UAC elevation, whitelist protection, transaction recovery, and SHA-256 integrity verification.

**Version:** v1.9.2  
**Updated:** 2026-07-15  
**Requirements:** Windows 10/11 x64

## ⚡ Core Features

- **Symbolic Link Migration:** Use directory junctions to relocate AppData to another disk
- **UAC Elevation:** Automatic administrator privilege request
- **Whitelist Protection:** Prevent accidental migration of system-critical directories
- **Transaction Recovery:** Automatic rollback on failure
- **Integrity Verification:** SHA-256 checksum validation
- **GUI Interface:** User-friendly Windows desktop application
- **Professional Packaging:** PyInstaller EXE with Windows CI

## 🎯 Use Case

Windows C: drive space optimization by moving large directories (AppData, etc.) to secondary drives while maintaining complete directory hierarchy, transparent to applications.

## 🛠️ Tech Stack

- Python 3.9+
- Tkinter (GUI)
- PyInstaller (EXE packaging)
- Windows API
- GitHub Actions (CI/CD)

## 📊 Features

- Directory size calculation and estimation
- Real-time progress tracking
- Error handling and rollback
- System safety checks
- Detailed logging

---

*Practical Windows utility demonstrating desktop application development and system-level operations.*
