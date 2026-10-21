> 🏠 [返回主页](https://github.com/hhtbing) | **中文** / [English](./README_en.md)

# Model Router — 多模型路由与接入层

> 中文 | [**English Documentation**](./README_en.md)

![类型](https://img.shields.io/badge/类型-AI%20基础设施-blue)
![技术](https://img.shields.io/badge/技术-Python%20%7C%20FastAPI%20%7C%20SQLite-green)

## 📋 项目概览

Model Router 是面向 AI Agent 和多客户端场景的模型接入层。它把不同 Provider、模型目录和协议入口收敛到统一服务中，并将模型选择、密钥池、冷却切换、健康检查和用量观测组织成可配置、可追踪的路由链路。

**项目类型：** AI 模型基础设施

**开发周期：** 2026 年 10 月 - 至今

**项目状态：** 生产环境

## 🎯 解决的问题

1. **多 Provider 接入复杂：** 不同模型服务在协议、鉴权和错误返回上存在差异。
2. **故障切换依赖人工：** 单个凭据或上游模型异常时，需要统一冷却和回退机制。
3. **协议路径不统一：** Agent 客户端需要同时使用 Responses 和 Chat 等不同调用方式。
4. **运行状态不可见：** 模型可用性、使用量和错误原因需要统一观测。

## ⚡ 核心特性

### 1. 统一协议入口
- 统一承接客户端请求和模型响应
- 支持 Responses/Chat 协议路径透传
- 保持调用方式与 Provider 适配解耦

### 2. Provider 与模型路由
- 支持多个模型 Provider 和模型目录
- 按配置选择模型与上游路径
- 统一处理鉴权、错误和返回格式

### 3. 可用性与冷却
- 支持密钥池和凭据轮换
- 对异常模型或凭据执行冷却切换
- 路由失败时按策略回退

### 4. 健康与用量观测
- 记录模型可用性和路由状态
- 观测请求量、错误和切换行为
- 为故障定位和容量判断提供依据

## 🏗️ 系统架构

```
Agent / 客户端
        ↓
Responses / Chat 协议入口
        ↓
模型选择与 Provider 路由
        ├─ 模型目录与配置
        ├─ 密钥池与冷却状态
        └─ 健康与用量观测
        ↓
上游模型服务
```

## 💡 技术亮点

- 路由决策与 Provider 适配分离，便于扩展新模型服务。
- 将冷却、错误和回退策略集中处理，避免客户端重复实现。
- 以统一协议入口降低 Agent 接入不同模型的门槛。
- 保留结构化状态和观测信息，便于运行验证与故障定位。

## 🛠️ 技术栈

- Python / FastAPI
- SQLite
- Responses / Chat 协议
- 多 Provider、密钥池与冷却切换
- 健康检查、日志和用量观测

## 🔗 相关链接

- 个人主页：https://github.com/hhtbing
- 项目作品集：https://github.com/hhtbing/portfolio

---

*面向多模型环境的统一接入与可靠路由基础设施。*
