# AgentMeshOS - Self-Hosted AI Agent Platform

![Status](https://img.shields.io/badge/Status-Production-success)
![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20FastAPI%20%7C%20Nomad-blue)

## 📋 Project Overview

AgentMeshOS is a self-hosted AI agent runtime platform for individuals and small teams. It organizes distributed compute nodes, model capabilities, task scheduling, system cloud storage, and application deliverables into a traceable work chain.

**Project Type:** Distributed Platform  
**Development Period:** July 2025 - Present  
**Team Size:** Personal Project  
**Project Status:** Production Environment

## 🎯 Problems Solved

1. **Multi-Node Collaboration:** Unified management of AI workloads across multiple servers
2. **Artifact Traceability:** All tasks, deliverables, and evidence are auditable
3. **Application Delivery:** Unified application registration, execution, and delivery mechanism

## ⚡ Core Features

### 1. Distributed Task Scheduling
- Nomad-based task distribution
- Node capability matching and selection
- Task cancellation, recovery, and audit

### 2. AI BOSS Intelligent Orchestration
- Natural language requirement description
- Automatic task dependency graph generation
- Intelligent model and worker selection

### 3. Unified Artifact Management
- File-level SHA-256 traceability
- Cloudreve cloud storage
- Version control and rollback

### 4. Application Center
- Application registration and lifecycle management
- Standardized input/output interfaces
- Automatic artifact archiving

## 🏗️ System Architecture

### Core Components

| Component | Tech Stack | Responsibility |
|-----------|-----------|---------------|
| AI Runtime | FastAPI + SQLite | Task orchestration, state management, app lifecycle |
| Console | Vanilla JS | Web management interface |
| OmniRoute | Official | Model routing and health check |
| Nomad | HashiCorp | Distributed task scheduling |
| Cloudreve | Go | System cloud storage and file storage |
| Tailscale | Tailnet | Node control plane network |

### Data Flow

```
User Request → Console 
            ↓
        AI Runtime (Plan, Task Graph)
            ↓
        Nomad (Node Selection, Scheduling)
            ↓
        Worker (Execution)
            ↓
        Cloudreve (Artifact Storage)
            ↓
        AI Runtime (Acceptance, Audit)
            ↓
        Console (Display)
```

## 💡 Technical Highlights

### 1. Lightweight Architecture
- Monolithic Runtime, avoiding microservice complexity
- SQLite + FTS5 full-text search
- No message queue needed, direct Nomad scheduling

### 2. Security Boundaries
- Workers don't get cloud storage credentials
- Models can only use registered capabilities
- Task sandboxing and isolation

### 3. Traceability
- All artifacts record SHA-256
- External storage references are immutable
- Complete audit logs

## 📊 Project Outcomes

- ✅ Supports 3 production nodes collaboration
- ✅ Manages 20+ registered applications
- ✅ Processed 500+ tasks
- ✅ Zero data loss, 100% traceable

## 🛠️ Tech Stack Details

**Backend:**
- Python 3.11+
- FastAPI (Async web framework)
- SQLite + FTS5 (Full-text search)
- Pydantic (Data validation)

**Frontend:**
- Vanilla JavaScript (No framework)
- Native Web Components
- Fetch API

**Infrastructure:**
- Docker + Docker Compose
- Nomad (Task scheduling)
- Tailscale (Private network)
- Nginx (Reverse proxy)

**Storage:**
- SQLite (Metadata)
- Cloudreve (File storage)
- WebDAV (File transfer)

## 🤔 Design Decisions

### Why SQLite?
- Single-user scenario doesn't need complex database
- FTS5 provides powerful full-text search
- Simple backup - just file-level copy

### Why Nomad?
- Lightweight, no need for Kubernetes complexity
- Native support for Docker and binary tasks
- Good integration with HashiCorp ecosystem

### Why Not Microservices?
- Current single-user scale doesn't need it
- Reduce deployment and maintenance complexity
- Keep system simple and controllable

## 📚 Repository Structure

```
AgentMeshOS/
├── ai-runtime/          # AI Runtime service, storage, apps, tests
├── tools/               # Console, Docs, Gateway, Worker components
├── scripts/clients/     # Node onboarding and client scripts
├── scripts/deploy/      # Service and container deployment scripts
├── scripts/ci/          # Local testing, plan state, release checks
├── docs/architecture/   # Architecture, deployment, security (source of truth)
├── docs/plans/          # Current plans, history, completion archive
├── nomad/               # Nomad job definitions and fixtures
└── AGENTS.md            # Contributor and AI execution entry
```

## 🔗 Related Links

- 📝 System Documentation: https://docs.yohan.fun
- 🎮 Console: https://console.yohan.fun

---

*This is a production system demonstrating distributed platform architecture and AI orchestration capabilities.*
