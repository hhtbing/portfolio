> [🏠 返回主页](https://github.com/hhtbing/blob/main/README.md) | 中文 | [**English Documentation**](./README_en.md)

# Server Migration — 服务器迁移部署方案

![Tech](https://img.shields.io/badge/Tech-Docker%20%7C%20Nginx-orange)
![Status](https://img.shields.io/badge/Status-Infrastructure-blue)

## 📋 项目概述

多个独立网站迁移的服务器配置和部署解决方案。

**项目类型：** 基础设施配置  
**技术栈：** Docker、Nginx、Shell 脚本

## 🏗️ 项目结构

为多个独立网站迁移而组织。每个网站拥有自己的容器、反向代理、持久化数据目录、证书目录和验证记录，位于 `sites/<site-name>/` 下。

### 目录组织
```
server-move/
├── sites/
│   ├── site-a/
│   │   ├── docker-compose.yml
│   │   ├── nginx.conf
│   │   ├── certs/
│   │   ├── data/
│   │   └── README.md
│   ├── site-b/
│   │   └── ...
│   └── site-c/
│       └── ...
├── scripts/
│   ├── migrate.sh
│   ├── backup.sh
│   └── restore.sh
└── docs/
    └── migration-guide.md
```

## ⚡ 核心功能

### 迁移自动化
- 站点配置模板
- 数据备份脚本
- 批量迁移工具
- 验证检查清单

### 部署管理
- Docker Compose 编排
- Nginx 反向代理配置
- SSL/TLS 证书管理
- 健康检查机制

### 数据持久化
- 独立数据目录
- 备份策略
- 版本控制
- 回滚能力

## 💡 技术亮点

### 标准化流程
- 统一的迁移模板
- 文档化的验证步骤
- 可复用的配置片段
- 自动化脚本工具

### 安全性
- HTTPS 强制跳转
- 证书自动续期
- 访问日志记录
- 安全头配置

## 🛠️ 技术栈

- Docker & Docker Compose
- Nginx 反向代理
- SSL/TLS 证书管理（Let's Encrypt）
- Shell 脚本自动化

## 📚 迁移流程

1. **准备阶段**：评估现有站点配置
2. **备份阶段**：完整备份数据和配置
3. **迁移阶段**：使用模板创建新环境
4. **验证阶段**：功能和性能测试
5. **切换阶段**：DNS 更新和流量切换
6. **监控阶段**：持续监控和优化

## 🎯 应用场景

- 多站点服务器整合
- 云平台迁移
- 容器化改造
- 灾备环境搭建

---

*基础设施项目，展示服务器迁移和部署专业知识。*
