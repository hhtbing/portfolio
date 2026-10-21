> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# Model Router - Multi-Model Routing and Access Layer

![Type](https://img.shields.io/badge/Type-AI%20Infrastructure-blue)
![Tech](https://img.shields.io/badge/Tech-Python%20%7C%20FastAPI%20%7C%20SQLite-green)

## 📋 Project Overview

Model Router is a model access layer for AI agents and multi-client environments. It consolidates different providers, model catalogs, and protocol entry points into a unified service, with configurable and traceable routing for model selection, key pools, cooldown and failover, health checks, and usage visibility.

**Project Type:** AI Model Infrastructure

**Development Period:** October 2026 - Present

**Project Status:** Production

## 🎯 Problems Solved

1. **Multi-provider complexity:** Model services differ in protocols, authentication, and error behavior.
2. **Manual failover:** Credential or upstream failures require a consistent cooldown and fallback policy.
3. **Protocol fragmentation:** Agent clients need both Responses and Chat-style model access.
4. **Limited runtime visibility:** Model availability, usage, and failure reasons need unified observation.

## ⚡ Core Features

### 1. Unified Protocol Entry
- Accepts client requests and returns model responses through one service
- Supports Responses/Chat protocol passthrough
- Keeps client access decoupled from provider adapters

### 2. Provider and Model Routing
- Supports multiple model providers and model catalogs
- Selects models and upstream paths through configuration
- Normalizes authentication, errors, and response formats

### 3. Availability and Cooldown
- Supports key pools and credential rotation
- Applies cooldown and failover for unhealthy models or credentials
- Falls back according to routing policy

### 4. Health and Usage Visibility
- Records model availability and routing state
- Observes request volume, errors, and failover behavior
- Provides evidence for troubleshooting and capacity decisions

## 🏗️ System Architecture

```
Agent / Client
        ↓
Responses / Chat Protocol Entry
        ↓
Model Selection and Provider Routing
        ├─ Model Catalog and Configuration
        ├─ Key Pools and Cooldown State
        └─ Health and Usage Visibility
        ↓
Upstream Model Services
```

## 💡 Technical Highlights

- Separates routing decisions from provider adapters for easier expansion.
- Centralizes cooldown, error handling, and fallback policies.
- Reduces the cost of connecting agents to different model services.
- Keeps structured state and operational evidence for verification.

## 🛠️ Tech Stack

- Python / FastAPI
- SQLite
- Responses / Chat protocols
- Multi-provider routing, key pools, and cooldown
- Health checks, logging, and usage visibility

## 🔗 Related Links

- Profile: https://github.com/hhtbing
- Portfolio: https://github.com/hhtbing/portfolio

---

*A unified access and reliable routing layer for multi-model environments.*
