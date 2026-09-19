> 🏠 [Back to Home](https://github.com/hhtbing) | [中文](./README.md) / **English**

# Owl Website — Official Website & Marketing Platform

![Tech](https://img.shields.io/badge/Tech-Node.js%20%7C%20Express%20%7C%20Docker-blue)
![Status](https://img.shields.io/badge/Status-Production-success)
![Architecture](https://img.shields.io/badge/Architecture-Frontend%2FBackend%20Separation-orange)

🔗 **Live Site:** https://www.wisefido.com/

## 📋 Project Overview

Enterprise-grade official website and marketing platform. **Not just static pages**, but a complete web application with full backend management system. Features frontend/backend separation architecture with content management, user system, data analytics, and operational tools.

**Project Type:** Corporate Website  
**Architecture:** Frontend/Backend Separation + Microservices  
**Core Tech:** Node.js, Express, JWT, Docker, Nginx

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Layer                               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │  Public Site  │    │  Admin Panel  │    │  Mobile View  │     │
│  │  (Display)    │    │  (Operations) │    │  (Responsive) │     │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘      │
└─────────┼────────────────────┼────────────────────┼─────────────┘
          │                    │                    │
          ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Nginx Reverse Proxy Layer                       │
│         (Load Balancing / SSL Termination / Static Cache)         │
└─────────────────────────┬───────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  API Gateway │  │  Static Assets│  │  CDN         │
│  (Route/Auth) │  │  (Img/JS/CSS) │  │  (Global)    │
└──────┬───────┘  └──────────────┘  └──────────────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────────┐
│                  Application Layer (Node.js)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  CMS Module   │  │  Auth Module  │  │  Analytics   │          │
│  │  - Editor     │  │  - JWT Auth   │  │  - Statistics│          │
│  │  - Versioning │  │  - Permissions│  │  - Behavior  │          │
│  │  - Review     │  │  - Sessions   │  │  - Reports   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Asset Module │  │  Ops Tools    │  │  Notification│          │
│  │  - Upload     │  │  - Email Cfg  │  │  - SMTP Mail │          │
│  │  - Storage    │  │  - Workflow   │  │  - Message Q │          │
│  │  - CDN Sync   │  │  - Scheduler  │  │  - Events    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────┬───────────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Data Layer   │  │  Cache Layer  │  │  File Storage│
│  (RDBMS)      │  │  (Redis)      │  │  (Object)    │
│  - Content    │  │  - Session    │  │  - Images    │
│  - Users      │  │  - Page Cache │  │  - Static    │
│  - Analytics  │  │  - Hot Data   │  │  - Backups   │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## ⚡ Core Functional Modules

### 1. Content Management System (CMS)

**Page Management**
- Visual page editor with live preview
- Page template system for quick layout reuse
- Version control system with rollback and history comparison
- Draft/Published/Offline status management
- Multi-language content management (CN/EN)

**Content Review**
- Admin approval workflow
- Content change history tracking
- Sensitive word filtering and detection
- Publishing permission control

**Asset Management**
- Batch image upload and compression
- File categorization and tagging
- Automatic CDN synchronization
- Asset usage statistics and cleanup

### 2. User Authentication & Permission System

**Authentication**
- JWT Token stateless authentication
- Refresh Token auto-renewal
- Multi-device login management
- Password encryption and security policies

**Permission Management**
- Role-Based Access Control (RBAC)
- Fine-grained permissions (View/Edit/Publish/Delete)
- Admin hierarchy and inheritance
- Operation logs and audit trails

### 3. Data Analytics & Statistics

**Access Analytics**
- Page view statistics (PV/UV)
- User behavior path analysis
- Traffic source and channel analysis
- Geographic and device distribution

**Operational Reports**
- Custom report generation
- Data visualization charts
- Scheduled report auto-delivery
- Abnormal traffic monitoring and alerts

### 4. Operational Toolset

**Email System**
- SMTP email service configuration
- Email template management
- Bulk email sending
- Delivery status tracking

**Workflow Engine**
- Content publishing approval process
- Task assignment and tracking
- Automated task scheduling
- Event triggers and responses

---

## 🛠️ Tech Stack & Implementation

**Backend:**
- **Node.js + Express** - RESTful API services
- **JWT** - Stateless authentication
- **Database** - Relational data persistence
- **Redis** - Session cache and hot data

**Deployment:**
- **Docker** - Containerized deployment
- **Nginx** - Reverse proxy and load balancing
- **Process Manager** - PM2 auto-restart and log management
- **Monitoring** - Log analysis and alerting

**Frontend:**
- Frontend/Backend separation architecture
- Responsive design with mobile adaptation
- CDN acceleration and resource optimization

---

## 💡 Technical Highlights

### Architecture Design
- **Frontend/Backend Separation**: Clear responsibility boundaries, independent iteration
- **Microservices**: Module decoupling, on-demand scaling
- **Stateless Design**: JWT authentication, easy horizontal scaling

### Performance Optimization
- **Multi-layer Caching**: Nginx static cache + Redis data cache
- **CDN Acceleration**: Global content delivery network
- **Resource Optimization**: Image compression, code splitting, lazy loading

### Security Assurance
- **JWT Authentication**: CSRF attack prevention
- **Permission Control**: Fine-grained RBAC system
- **Operation Audit**: Complete log tracking and auditing

---

## 📊 Project Status

- ✅ Production environment running
- ✅ CMS features complete
- ✅ Monitoring and alerting configured

---

*Enterprise-grade website with backend management system, showcasing full-stack web development, system architecture design, and DevOps capabilities.*
