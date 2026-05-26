# QuoteFlow SaaS - Gerador de Orçamentos

Sistema moderno de gestão de orçamentos focado em pequenas empresas e profissionais.

## Tecnologias
- **Backend:** Java 21, Spring Boot 3, Spring Security (JWT), PostgreSQL.
- **Frontend:** React + Tailwind CSS + Shadcn/UI.
- **Infra:** Docker, RabbitMQ, Redis.

## Arquitetura
Consulte o arquivo `/docs/architecture_design.md` para detalhes completos da infraestrutura de microsserviços.

## Como Iniciar (Desenvolvimento)
1. Certifique-se de ter o Docker instalado.
2. Execute a infraestrutura base:
   ```bash
   docker-compose up -d postgres redis rabbitmq
   ```
3. Cada serviço está localizado na pasta `/services`.

## Funcionalidades Planejadas
- [ ] Autenticação Multi-tenant (JWT)
- [ ] CRUD de Clientes e Produtos
- [ ] Geração dinâmica de Orçamentos
- [ ] Exportação para PDF (Worker process)
- [ ] Compartilhamento via Link Público e WhatsApp
- [ ] IA para geração de textos profissionais
