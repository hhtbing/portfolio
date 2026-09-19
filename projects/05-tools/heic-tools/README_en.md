> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# HEIC Tools — Apple Image Format Viewer

![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20Image%20Processing-orange)
![Platform](https://img.shields.io/badge/Platform-Windows-blue)

## 📋 Project Overview

Windows desktop tool for viewing and converting HEIC (High Efficiency Image Container) format images from Apple devices.

**Project Type:** Desktop Utility  
**Platform:** Windows

## ⚡ Core Features

### HEIC Viewing
- Image thumbnail preview
- Full-size image display
- Image metadata viewing
- Batch browsing support

### Format Conversion
- HEIC to JPG/PNG conversion
- Batch conversion support
- Adjustable quality parameters
- Preserve EXIF metadata

### Batch Processing
- Folder batch conversion
- Conversion progress display
- Error handling and skip
- Output directory customization


## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    GUI Layer                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │File      │  │Image     │  │Convert   │              │
│  │Browser   │  │Preview   │  │Panel     │              │
└──┴──────────┴──┴──────────┴──┴──────────┴──────────────┘
         │              │              │
┌────────▼──────────────▼──────────────▼──────────────────┐
│                  Image Processing Engine                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │HEIC          │  │Color Space   │  │Quality       │  │
│  │Decoder       │  │Conversion    │  │Control       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │Batch         │  │Metadata      │  │Progress      │  │
│  │Convert       │  │Extraction    │  │Manager       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└──────────────────────────┬───────────────────────────────┘
                           │
                  ┌────────▼────────┐
                  │  File System    │
                  │  Operations     │
                  └─────────────────┘
```

## 💡 Technical Highlights

### Image Processing
- Format conversion engine
- Color space management
- Image quality optimization
- Memory-efficient processing

### User Experience
- Drag-and-drop operation
- Preview and conversion integration
- Clean interface design
- Fast processing speed

## 🛠️ Tech Stack

**Core Technologies:**
- Python (core development)
- Pillow/PIL (image processing)
- HEIF/HEIC decoder

**GUI Framework:**
- Tkinter/PyQt
- Modern UI components

## 📦 Distribution

- PyInstaller standalone executable
- No dependencies required
- One-click installation

## 📱 Application Scenarios

- Cross-platform image sharing
- Windows viewing Apple photos
- Batch format conversion
- Image backup and archiving

## 🎯 Problem Solved

- Windows native lack of HEIC support
- Simplify batch conversion workflow
- Preserve image quality during conversion
- Fast local processing without upload

---

*Windows desktop tool solving Apple device image format compatibility issues.*
