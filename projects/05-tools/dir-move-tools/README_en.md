> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# DIR-MOVE-TOOLS — Windows Batch File Migration

![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20GUI-blue)
![Version](https://img.shields.io/badge/Version-v2.0.0-green)

## 📋 Project Overview

Windows desktop tool for batch file and directory migration with whitelist protection and GUI interface.

**Project Type:** Desktop Utility  
**Version:** v2.0.0  
**Platform:** Windows

## ⚡ Core Features

### Batch Migration
- Multi-directory simultaneous migration
- File integrity verification
- Real-time progress display
- Resume from interruption support

### Security Protection
- **Whitelist Protection:** Prevent accidental migration of system-critical directories
- Target path validation
- Pre-operation confirmation mechanism
- Detailed logging

### GUI Interface
- Intuitive operation interface
- Drag-and-drop file selection
- Real-time progress display
- Error prompts and handling

## 💡 Technical Highlights

### Security Mechanisms
- System directory whitelist checking
- Path legality validation
- Double confirmation before overwrite
- Rollback-capable operation design

### Performance Optimization
- Multi-threaded parallel copying
- Large file chunked processing
- Intelligent skip strategy
- Memory usage optimization

### User Experience
- Drag-and-drop support
- Batch operation queuing
- Error recovery mechanisms
- Operation history tracking

## 🛠️ Tech Stack

**Core Technologies:**
- Python (core development)
- Tkinter (GUI framework)
- File system operations
- Multi-threading

**Key Features:**
- Whitelist validation engine
- Hash-based integrity checking
- Transaction-like operations

## 📦 Distribution

**Packaging:**
- PyInstaller standalone executable
- No Python environment required
- Single-click installation

**Configuration:**
- Config file persistence
- User preference saving
- Automatic log archiving

## 🎯 Use Cases

- System drive cleanup and migration
- Large-scale file organization
- User data migration
- Disk space management

## 📝 Whitelist Protection Examples

The tool automatically blocks dangerous operations:
- Migrating Windows system directories (System32, Windows)
- Migrating user profile directories (AppData, Desktop without confirmation)
- Migrating registry-related directories
- Migrating currently running program directories

---

*Windows utility demonstrating desktop application development and file system operation capabilities.*
