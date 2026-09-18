> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

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

### 2. AI BOSS Intelligent Orchestration

### 3. Unified Artifact Management

### 4. Application Center
- Application registration and lifecycle management

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
- No message queue needed, direct Nomad scheduling

### 2. Security Boundaries

### 3. Traceability

## 📊 Project Outcomes


## 🛠️ Tech Stack Details

**Backend:**

**Frontend:**

**Infrastructure:**

**Storage:**

## 🤔 Design Decisions

### Why SQLite?
- Single-user scenario doesn't need complex database

### Why Nomad?

### Why Not Microservices?

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


---

*This is a production system demonstrating distributed platform architecture and AI orchestration capabilities.*
