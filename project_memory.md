# Memória de Projeto: QuoteFlow SaaS

Este documento serve como a memória técnica e estratégica do desenvolvimento da plataforma **QuoteFlow**, registrando as decisões de arquitetura e a visão de longo prazo.

## 🧠 Visão Geral
O **QuoteFlow** foi concebido para ser mais que um simples gerador de PDF; ele é um motor comercial (SaaS) focado em converter orçamentos em vendas através de automação, IA e UX de alta performance.

---

## 🏗️ Decisões de Arquitetura

### 1. Microsserviços vs Monolito
- **Decisão**: Microsserviços baseados em domínio.
- **Motivação**: O serviço de **Billing** (geração de PDF e links) possui requisitos de performance e escalabilidade muito diferentes do **Auth Service**. Microsserviços permitem escalar o motor de documentos independentemente.

### 2. Multi-tenancy (Estratégia de Dados)
- **Decisão**: Shared Database, Shared Schema com Discriminação por `tenant_id`.
- **Motivação**: Facilidade de manutenção e custo reduzido no início do SaaS. O isolamento é garantido em nível de aplicação via `TenantContext` e filtros que injetam o ID da empresa em todas as queries.

### 3. Comunicação Event-Driven
- **Decisão**: Uso de RabbitMQ para processos assíncronos.
- **Motivação**: O envio de e-mails e a geração complexa de PDFs não devem bloquear a thread principal do usuário. Tarefas demoradas são enviadas para workers.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Justificativa |
| :--- | :--- | :--- |
| **Backend** | Java 21 + Spring Boot 3 | Performance, suporte a Virtual Threads e ecossistema robusto. |
| **Frontend** | React + Tailwind | Agilidade no desenvolvimento de UIs ricas e responsivas. |
| **Segurança** | OAuth2 / JWT | Padrão de mercado para microsserviços. |
| **Infra** | Docker & Redis | Portabilidade e cache de alta performance. |

---

## 📈 Estratégia de Escalabilidade (Roadmap Técnico)

1.  **Fase 1 (Atual)**: MVP com arquitetura baseada em microsserviços e UI premium.
2.  **Fase 2 (IA)**: Integração com LLMs (OpenAI) para auxílio na redação de orçamentos.
3.  **Fase 3 (Observabilidade)**: Implementação de Prometheus e Grafana para monitorar saúde dos serviços.
4.  **Fase 4 (Infrastructure as Code)**: Scripts Terraform para deploy automatizado em AWS ou Azure.

---

## 💎 Diferenciais Estratégicos
- **Product-Led Growth**: O link público do orçamento é uma ferramenta de marketing; clientes que recebem o link conhecem o QuoteFlow através do botão "Powered by QuoteFlow".
- **Design Experience**: A interface não é apenas "limpa", é "funcional". Uso de micro-interações para reduzir a fricção cognitiva do vendedor.

---
**Data de Criação**: 26 de Maio de 2026
**Arquiteto**: Antigravity AI
