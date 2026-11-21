> 🏠 [返回主页](https://github.com/hhtbing) | **中文** / [English](./README_en.md)

# CLIProxyAPI 部署与配置

> 中文 | [**English Documentation**](./README_en.md)

![类型](https://img.shields.io/badge/类型-开源项目部署-blue)
![技术](https://img.shields.io/badge/技术-Docker%20%7C%20Nginx%20%7C%20CLIProxyAPI-green)

## 📋 项目概览

CLIProxyAPI（CPA）是一个开源的多 Provider 模型接入网关。本仓库维护它在本地的运行环境、Provider 与模型配置、客户端目录、健康验收和回退流程。

**项目类型：** 开源软件部署与运维

**上游项目：** [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)（开源，跟随官方发行版）

**我的角色：** 部署、配置、验收与日常运维，不开发 CPA、不修改上游、不维护长期分支

## 🎯 做的事

1. **运行环境：** 容器化部署、反向代理、TLS 入口和开机自启。
2. **Provider 与模型配置：** 各家 Provider 的接入参数、模型目录和协议路径。
3. **客户端目录：** 给 Codex、OpenCode、OpenClaw 等客户端维护统一的模型别名与接入地址。
4. **健康验收：** 连通性检查、模型可用性核对、失败回退流程。
5. **版本策略：** 跟随官方发行版升级，升级前做兼容性验证，保留回退路径。

## 🧱 上游能力与我的工作

| 类别 | 内容 |
|---|---|
| CPA 上游提供 | 多 Provider 协议适配、模型路由、凭据池、冷却切换、用量统计、WebUI 仪表盘 |
| 我做的部分 | 部署编排、Provider 与模型配置、客户端别名目录、健康检查脚本、升级与回退流程 |

**对外口径：** 可以讲「基于开源 CLIProxyAPI 完成的模型网关部署与多客户端接入」，不主张自研模型路由服务。

## 🏗️ 部署形态

```text
Codex / OpenCode / OpenClaw 等客户端
            ↓ 统一模型别名
       Nginx 反向代理（TLS）
            ↓
     CLIProxyAPI 容器（官方发行版）
            ↓ 按 Provider 分发
  各家模型服务（多协议）
```

## ⚙️ 运维要点

- 配置变更前先备份当前配置与容器镜像标签，变更后回读健康状态。
- 模型别名变更要同步客户端目录，避免客户端指向不存在的模型。
- 升级按官方 release 走，不手工改上游代码；升级失败回滚到上一个可用镜像。
- 仪表盘只用于内部观测，对外材料中不展示实时用量和 Provider 明细。

## 📌 说明

本页描述的是部署与配置实践，不是 CPA 本身的功能介绍。CPA 的能力归属上游项目，仓库里只保留运行所需的配置、脚本和验收记录。
