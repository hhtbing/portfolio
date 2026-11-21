> 🏠 [Back to Home](https://github.com/hhtbing) | [中文](./README.md) / **English**

# CLIProxyAPI Deployment and Configuration

> [**中文文档**](./README.md) | English

![Type](https://img.shields.io/badge/Type-Open%20Source%20Deployment-blue)
![Tech](https://img.shields.io/badge/Tech-Docker%20%7C%20Nginx%20%7C%20CLIProxyAPI-green)

## 📋 Overview

CLIProxyAPI (CPA) is an open-source gateway that unifies access to multiple model providers. This repository maintains its local runtime environment, provider and model configuration, client directory, health verification and rollback procedure.

**Project type:** Open-source deployment and operations

**Upstream:** [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) (open source, following official releases)

**My role:** Deployment, configuration, verification and operations. I do not develop CPA, modify upstream code, or maintain a long-lived fork.

## 🎯 What I do

1. **Runtime:** Containerized deployment, reverse proxy, TLS entry and boot-time startup.
2. **Provider and model configuration:** Access parameters, model catalog and protocol paths for each provider.
3. **Client directory:** Unified model aliases and endpoint addresses for Codex, OpenCode, OpenClaw and other clients.
4. **Health verification:** Connectivity checks, model availability validation and fallback procedure.
5. **Version policy:** Follow official releases, validate compatibility before upgrading, keep a rollback path.

## 🧱 Upstream capabilities vs. my work

| Category | Content |
|---|---|
| Provided by CPA | Multi-provider protocol adaptation, model routing, credential pool, cooldown switching, usage statistics, WebUI dashboard |
| My contribution | Deployment orchestration, provider and model configuration, client alias directory, health check scripts, upgrade and rollback procedure |

**Positioning:** Described as "deployment of the open-source CLIProxyAPI gateway with multi-client integration", not as a self-built model routing service.

## 🏗️ Deployment shape

```text
Codex / OpenCode / OpenClaw clients
            ↓ unified model aliases
       Nginx reverse proxy (TLS)
            ↓
     CLIProxyAPI container (official release)
            ↓ dispatch by provider
  Model services (multiple protocols)
```

## ⚙️ Operations notes

- Back up configuration and container image tags before changes; re-read health status afterwards.
- Model alias changes must be synced to the client directory.
- Upgrades follow official releases; failed upgrades roll back to the previous working image.
- The dashboard is for internal observation only; public materials do not show live usage or provider details.

## 📌 Note

This page documents a deployment and configuration practice, not the CPA product itself. CPA capabilities belong to the upstream project; this repository only keeps the configuration, scripts and verification records required to run it.
