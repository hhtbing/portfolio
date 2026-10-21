> 🏠 [Back to Homepage](https://github.com/hhtbing) | [中文](./README.md) / **English**

# Agent Memory Service - Cross-Agent Long-Term Memory and Context Service

![Type](https://img.shields.io/badge/Type-Agent%20Infrastructure-purple)
![Tech](https://img.shields.io/badge/Tech-MCP%20%7C%20SQLite--vec%20%7C%20ONNX-blue)

## 📋 Project Overview

Agent Memory Service provides long-term memory and context for multiple AI agents. It consolidates memory ingestion, recall, user profiles, knowledge relationships, and context injection, while providing centralized management for skills and rules.

**Project Type:** Agent Infrastructure

**Development Period:** October 2026 - Present

**Project Status:** Production

## 🎯 Problems Solved

1. **Cross-session interruption:** Agents need stable project knowledge across tasks and threads.
2. **Fragmented access:** Different clients provide context through MCP, Hooks, or REST.
3. **Single retrieval strategy limitations:** Exact keywords, semantic search, and knowledge relationships need to work together.
4. **Long-term preference governance:** User profiles, skills, and rules need updatable and auditable management.

## ⚡ Core Features

### 1. Multi-Protocol Access
- Supports MCP, Hook, and REST integration
- Provides unified memory write, search, and session-context interfaces
- Preserves source and client identity information

### 2. Hybrid Retrieval
- Combines vector retrieval with full-text search
- Uses a knowledge graph to add entity and relationship context
- Supports filtering by tag, type, time, and quality

### 3. Context and Profiles
- Organizes cross-session context for agents
- Summarizes user preferences, working patterns, and project knowledge
- Supports context injection and controlled reads

### 4. Skills and Rules Governance
- Manages skill definitions and versions
- Maintains layered rules and publication content
- Supports mistake patterns, quality scoring, and human correction

## 🏗️ System Architecture

```
Agent / Client
        ↓
MCP / Hook / REST Access
        ↓
Event Processing and Memory Ingestion
        ↓
Hybrid Retrieval ─ Vector / Full-Text / Knowledge Graph
        ↓
Context Assembly ─ Profiles / Skills / Rules
        ↓
Agent Context
```

## 💡 Technical Highlights

- Unifies memory access from different agents behind one service boundary.
- Combines `bge-m3` semantic vectors, full-text retrieval, and knowledge relationships.
- Moves long-term context from searchable data toward governed profiles, skills, and rules.
- Supports separate verification of protocol, service, and storage layers.

## 🛠️ Tech Stack

- Python / FastAPI
- MCP, Hook, REST
- SQLite, SQLite-vec, FTS
- ONNX, bge-m3
- Knowledge graph, user profiles, skills, and rules

## 🔗 Related Links

- Profile: https://github.com/hhtbing
- Portfolio: https://github.com/hhtbing/portfolio

---

*Sustainable, searchable, and governed long-term memory and context for multiple agents.*
