> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# OwlFront Mock — Care System Demo Frontend

![Tech](https://img.shields.io/badge/Tech-Vue%20%7C%20JavaScript-green)
![Status](https://img.shields.io/badge/Status-Demo-orange)

🔗 **Live Demo:** https://demo.wisefido.com/

## 📋 Project Overview

Demo frontend for elderly care monitoring system, showcasing health monitoring dashboard and data visualization features.

**Project Type:** Demo Frontend  
**Tech Stack:** Vue.js, JavaScript

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    OwlFront Mock Architecture                    │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ Dashboard     │    │ Management    │    │ Visualization │
│ (Monitor)     │    │ (Facility)    │    │ (Charts)      │
└───────┬───────┘    └───────┬───────┘    └───────┬───────┘
        │                     │                     │
        ▼                     ▼                     ▼
   Vital Signs          Device Status           Chart Library
   Health Trends        Staff Assignment        Real-time Update
   Alert Warnings       Task Management         Interactive Explore

                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Vue.js Frontend Framework                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Components  │  │  State Mgmt   │  │  Router      │          │
│  │  (Vue)       │  │  (Vuex)      │  │  (Vue Router)│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────┬───────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Mock Data   │  │  Chart Lib    │  │  UI Library  │
│  (Fake API)  │  │  (ECharts)   │  │  (Element UI)│
│  - Mock Data │  │  - Line Chart │  │  - Table     │
│  - Random Gen│  │  - Bar Chart  │  │  - Form      │
│  - Real-time │  │  - Pie Chart  │  │  - Dialog    │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## ⚡ Core Features

### Health Monitoring Dashboard
- **Real-time Vital Signs Display**: Heart rate, blood pressure, temperature, SpO2, etc.
- **Health Data Trend Charts**: Historical data visualization, trend analysis
- **Alert Warnings**: Threshold monitoring, color-coded anomaly indicators
- **Multi-dimensional Data Comparison**: Multi-person comparison, time range comparison

### Care Facility Management
- **Device Status Monitoring**: Online/offline status, battery display
- **Staff Assignment**: Shift scheduling, task allocation
- **Task Flow Management**: To-do items, completion records
- **Responsive Design**: Desktop/tablet/mobile adaptive

### Data Visualization
- **Chart Library Integration**: ECharts professional chart display
- **Real-time Data Updates**: Scheduled refresh, WebSocket simulation
- **Interactive Data Exploration**: Click for details, time range filtering
- **Multi-device Responsive Layout**: Adapt to different screen sizes

---

## 💡 Technical Highlights

### Frontend Architecture
- **Vue.js Component-Based**: Reusable components, modular development
- **State Management**: Vuex centralized state management
- **Router Management**: Vue Router single-page application

### Mock Data System
- **Simulate Real API**: Independent mock data layer
- **Random Data Generation**: Realistic fake data
- **Scheduled Data Updates**: Simulate real-time data streams

### Responsive Design
- **Mobile-First**: Adapt to phone, tablet, desktop
- **Media Queries**: Breakpoint-based responsive layout
- **Touch Optimization**: Gesture operations, touch-friendly

---

## 🛠️ Tech Stack

**Core Framework:**
- **Vue.js 2.x** - Frontend framework
- **Vuex** - State management
- **Vue Router** - Router management

**UI Component Library:**
- **Element UI** - Enterprise UI component library
- **ECharts** - Data visualization chart library

**Development Tools:**
- **Webpack** - Module bundler
- **Babel** - ES6+ transpiler
- **ESLint** - Code quality checker

**Mock Data:**
- **Mock.js** - Mock data generator
- **JSON** - Static data storage

---

## 🎯 Demo Value

This project demonstrates:
- **Frontend Development Skills**: Proficient use of Vue.js ecosystem
- **Data Visualization Skills**: Chart library integration and data display
- **Healthcare Domain Understanding**: Care system business logic
- **User Experience Design**: Responsive layout and interaction design
- **Component-Based Development**: Maintainable frontend architecture

---

## 📱 Access

**Live Demo:** https://demo.wisefido.com/

**Main Pages:**
- Monitoring Dashboard: Real-time health data display
- Device Management: Care device status monitoring
- Data Analysis: Historical data chart analysis
- Task Management: Care task flow management

---

*Demo project demonstrating frontend development, data visualization, and user experience design capabilities.*
