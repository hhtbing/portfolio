> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# AgentMeshOS — Self-Hosted AI Agent Platform

![Status](https://img.shields.io/badge/Status-Production-success)
![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20FastAPI%20%7C%20Nomad-blue)

## 📋 Project Overview

AgentMeshOS is a self-hosted AI Agent runtime platform for individuals and small teams. It organizes dispersed compute nodes, model capabilities, task scheduling, system cloud storage, and application deliverables into traceable work chains.

**Project Type:** Distributed Platform  
**Development Period:** July 2025 - Present  
**Team Size:** Individual Project  
**Project Status:** Production

## 🎯 Problems Solved

1. **Multi-Node Collaboration:** Unified management of AI workloads across multiple servers
2. **Traceable Outcomes:** All tasks, deliverables, and evidence are auditable
3. **Application Delivery:** Unified application registration, execution, and delivery mechanism

## ⚡ Core Features

### 1. Distributed Task Scheduling
- Node capability matching and selection
- Task cancellation, recovery, and auditing
- Priority queue management
- Load balancing across nodes

### 2. AI BOSS Intelligent Orchestration
- Natural language requirement description
- Automatic task dependency graph generation
- Intelligent resource allocation
- Adaptive execution strategies

### 3. Unified Artifact Management
- File-level SHA-256 traceability
- Version control and rollback
- Automatic artifact archiving
- Cross-node artifact sharing

### 4. Application Hub
- Application registration and lifecycle management
- Standardized input/output interfaces
- Automatic artifact archiving
- Plugin system support

## 🏗️ System Architecture

### Core Components

| Component | Tech Stack | Responsibility |
|-----------|-----------|---------------|
| AI Runtime | FastAPI + SQLite | Task orchestration, state management, application lifecycle |
| Console | Vanilla JS | Web management interface |
| OmniRoute | Official | Model routing and health checks |
| Nomad | HashiCorp | Distributed task scheduling |
| Cloudreve | Go | System cloud storage and file storage |
| Tailscale | Tailnet | Node control plane network |

### Data Flow

```
User Request → Console 
        ↓
    AI Runtime (Planning, Task Graph)
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
- No Kubernetes overhead
- SQLite for simplicity
- Single binary deployment
- Minimal resource footprint

### 2. Security Boundaries
- Models can only invoke registered capabilities
- Task sandboxing and isolation
- Role-based access control
- Secure artifact transmission

### 3. Traceability
- All artifacts record SHA-256
- Complete audit logs
- Version control integration
- Reproducible builds

## 📊 Project Achievements

- ✅ Supports 3 production nodes in collaboration
- ✅ Manages 20+ registered applications
- ✅ Processed 500+ tasks
- ✅ Zero data loss, 100% traceable

## 🛠️ Tech Stack Details

**Backend:**
- Python 3.11+ (FastAPI, SQLAlchemy, Pydantic)
- SQLite 3 (FTS5 full-text search)
- Redis (caching and pub/sub)

**Frontend:**
- Vanilla JavaScript (no framework overhead)
- Modern CSS Grid/Flexbox
- WebSocket real-time updates

**Infrastructure:**
- Nomad (task orchestration)
- Tailscale (secure networking)
- Docker (containerization)
- Cloudreve (file storage)

**Storage:**
- SQLite (metadata and state)
- Cloudreve (artifacts and files)
- Redis (ephemeral cache)

## 🤔 Design Decisions

### Why SQLite?
- Single-user scenario doesn't need complex database
- FTS5 provides powerful full-text search
- Simple backup - direct file-level copy
- Zero configuration and maintenance

### Why Nomad?
- Lightweight compared to Kubernetes
- Perfect for small-scale deployments
- Simple job definition
- Excellent multi-datacenter support

### Why Not Microservices?
- Current single-user scale doesn't require it
- Keep system simple and controllable
- Avoid distributed system complexity
- Easy to understand and maintain

## 📚 Repository Structure

```
AgentMeshOS/
├── ai-runtime/          # AI Runtime service, storage, apps, tests
├── tools/               # Console, Docs, Gateway, Worker components
├── scripts/clients/     # Node onboarding and client scripts
├── scripts/deploy/      # Service and container deployment scripts
├── scripts/ci/          # Local testing, plan status, release checks
├── docs/architecture/   # Architecture, deployment, security (authoritative)
├── docs/plans/          # Current plans, history, completion archives
├── nomad/               # Nomad job definitions and fixtures
└── AGENTS.md            # Collaborator and AI execution entry point
```

## 🔗 Related Links

- Production deployment on 3 nodes
- 20+ registered applications
- 500+ processed tasks

---

*This is a production system demonstrating distributed platform architecture and AI orchestration capabilities.*
