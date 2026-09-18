> [🏠 返回主页](https://github.com/hhtbing/blob/main/README.md) | 中文 | [**English Documentation**](./README_en.md)

# AgentMeshOS — 自托管 AI Agent 平台

> 中文 | [**English Documentation**](./README_en.md)

![状态](https://img.shields.io/badge/状态-生产环境-success)
![技术](https://img.shields.io/badge/技术-Python%20%7C%20FastAPI%20%7C%20Nomad-blue)

## 📋 项目概览

AgentMeshOS 是面向个人和小团队的自托管 AI Agent 运行时平台。它将分散的计算节点、模型能力、任务调度、系统云盘和应用交付物组织成可追溯的工作链。

**项目类型：** 分布式平台  
**开发周期：** 2025 年 7 月 - 至今  
**团队规模：** 个人项目  
**项目状态：** 生产环境

## 🎯 解决的问题

1. **多节点协作：** 统一管理多台服务器上的 AI 工作负载
2. **成果可追溯：** 所有任务、交付物、证据可审计
3. **应用交付：** 统一的应用注册、执行和交付机制

## ⚡ 核心特性

### 1. 分布式任务调度
- 基于 Nomad 的任务分发
- 节点能力匹配和选择
- 任务取消、恢复和审计

### 2. AI BOSS 智能编排
- 自然语言需求描述
- 自动生成任务依赖图
- 智能选择模型和 Worker

### 3. 统一成果管理
- 文件级 SHA-256 追溯
- Cloudreve 云盘存储
- 版本控制和回滚

### 4. 应用中心
- 应用注册和生命周期管理
- 标准化输入输出接口
- 自动成果归档

## 🏗️ 系统架构

### 核心组件

| 组件 | 技术栈 | 职责 |
|------|--------|------|
| AI Runtime | FastAPI + SQLite | 任务编排、状态管理、应用生命周期 |
| Console | Vanilla JS | Web 管理界面 |
| OmniRoute | 官方 | 模型路由和健康检查 |
| Nomad | HashiCorp | 分布式任务调度 |
| Cloudreve | Go | 系统云盘和文件存储 |
| Tailscale | Tailnet | 节点控制面网络 |

### 数据流

```
用户请求 → Console 
        ↓
    AI Runtime（规划、任务图）
        ↓
    Nomad（节点选择、调度）
        ↓
    Worker（执行）
        ↓
    Cloudreve（成果存储）
        ↓
    AI Runtime（验收、审计）
        ↓
    Console（展示）
```

## 💡 技术亮点

### 1. 轻量架构
- 单体 Runtime，避免微服务复杂度
- SQLite + FTS5 全文搜索
- 无需消息队列，直接 Nomad 调度

### 2. 安全边界
- Worker 不接触云盘凭据
- 模型只能调用已注册能力
- 任务沙箱和隔离

### 3. 可追溯性
- 所有成果记录 SHA-256
- 外部存储引用不可变
- 完整审计日志

## 📊 项目成果

- ✅ 支持 3 个生产节点协作
- ✅ 管理 20+ 注册应用
- ✅ 处理 500+ 任务
- ✅ 零数据丢失，100% 可追溯

## 🛠️ 技术栈详情

**后端：**
- Python 3.11+
- FastAPI（异步 Web 框架）
- SQLite + FTS5（全文搜索）
- Pydantic（数据验证）

**前端：**
- Vanilla JavaScript（无框架）
- 原生 Web Components
- Fetch API

**基础设施：**
- Docker + Docker Compose
- Nomad（任务调度）
- Tailscale（私有网络）
- Nginx（反向代理）

**存储：**
- SQLite（元数据）
- Cloudreve（文件存储）
- WebDAV（文件传输）

## 🤔 设计决策

### 为什么用 SQLite？
- 单用户场景不需要复杂数据库
- FTS5 提供强大的全文搜索
- 备份简单 - 直接文件级拷贝

### 为什么用 Nomad？
- 轻量级，不需要 Kubernetes 的复杂度
- 原生支持 Docker 和二进制任务
- 与 HashiCorp 生态集成良好

### 为什么不用微服务？
- 当前单用户规模不需要
- 减少部署和维护复杂度
- 保持系统简单可控

## 📚 仓库结构

```
AgentMeshOS/
├── ai-runtime/          # AI Runtime 服务、存储、应用、测试
├── tools/               # Console、Docs、Gateway、Worker 组件
├── scripts/clients/     # 节点入驻和客户端脚本
├── scripts/deploy/      # 服务和容器部署脚本
├── scripts/ci/          # 本地测试、计划状态、发布检查
├── docs/architecture/   # 架构、部署、安全（权威文档）
├── docs/plans/          # 当前计划、历史、完成归档
├── nomad/               # Nomad 任务定义和 fixtures
└── AGENTS.md            # 协作者和 AI 执行入口
```

## 🔗 相关链接

- 📝 系统文档：https://docs.yohan.fun
- 🎮 控制台：https://console.yohan.fun

---

*这是一个生产系统，展示了分布式平台架构和 AI 编排能力。*
