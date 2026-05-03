# FreeRidez 🏍️

> **"Sem patrão. Só você e a rua."**

Plataforma web de controle financeiro gamificado para entregadores e motoristas de aplicativo. Registre corridas, acompanhe gastos, bata metas e evolua financeiramente — do seu jeito.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**[🌐 Demo ao vivo](https://freeridez.vercel.app)** · **[📖 Documentação](docs/ARCHITECTURE.md)** · **[🐛 Reportar bug](https://github.com/seuuser/freeridez/issues)**

---

## 📸 Screenshots

| Hero | Features | Pricing |
|---|---|---|
| ![Hero](docs/screenshots/hero.png) | ![Features](docs/screenshots/features.png) | ![Pricing](docs/screenshots/pricing.png) |

---

## 🎯 Sobre o Projeto

Entregadores e motoristas de app trabalham por conta própria, mas raramente têm controle real sobre seus ganhos. FreeRidez resolve isso:

- **Sem burocracia** — abre e já usa, sem cadastro obrigatório
- **Offline first** — funciona sem internet, dados salvos localmente
- **Gamificado** — metas, milestones e conquistas que motivam
- **Acessível** — gratuito para sempre, Pro para quem quer mais

---

## 🚀 Stack Tecnológica

### Frontend
| Tech | Função |
|---|---|
| **Next.js 16** | Framework React com App Router, SSR/SSG |
| **TypeScript 5** | Tipagem estática end-to-end |
| **Tailwind CSS 3** | Estilização utility-first |
| **Framer Motion** | Animações e transições |
| **Recharts** | Gráficos responsivos |
| **Dexie.js** | IndexedDB para armazenamento offline |
| **Zustand** | Estado global |
| **TanStack Query** | Cache e sync com API (Pro) |
| **next-auth** | Autenticação (Google + email) |

### Backend
| Tech | Função |
|---|---|
| **NestJS** | API REST modular TypeScript-first |
| **PostgreSQL** | Banco de dados relacional |
| **Prisma** | ORM com migrations |
| **Passport.js + JWT** | Autenticação segura |
| **Stripe** | Pagamentos e assinaturas |
| **Helmet.js** | Headers de segurança |

### Infraestrutura
| Serviço | Função |
|---|---|
| **Vercel** | Deploy frontend com CI/CD automático |
| **Railway** | Deploy backend + PostgreSQL |
| **GitHub Actions** | CI: lint, type-check, tests |
| **Sentry** | Error tracking |

---

## ✨ Funcionalidades

### Plano Free (sem conta)
- [x] Registro rápido de corridas e gastos
- [x] Dashboard com bruto / líquido / gastos
- [x] 1 veículo, 1 meta ativa
- [x] Histórico dos últimos 7 dias
- [x] 100% offline (IndexedDB)
- [x] Fechar o dia (modo retroativo)

### Plano Pro (R$9,90/mês)
- [ ] Dados sincronizados na nuvem
- [ ] Múltiplos veículos e metas
- [ ] Histórico ilimitado
- [ ] Análise avançada + heatmap de horários
- [ ] Comparativo dias de chuva vs sol
- [ ] Exportar PDF (comprovante de renda)
- [ ] Sem anúncios

---

## 🛠️ Como rodar localmente

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose

### Setup

```bash
# 1. Clone o repositório
git clone https://github.com/seuuser/freeridez.git
cd freeridez

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# 4. Suba o banco de dados
docker compose up -d

# 5. Execute as migrations
cd apps/api
npx prisma migrate dev

# 6. Rode o projeto
cd ../..
npm run dev
```

A landing page estará em `http://localhost:3000` e a API em `http://localhost:3001`.

---

## 📁 Estrutura do Projeto

```
freeridez/
├── apps/
│   ├── web/          # Next.js (Landing page + App)
│   └── api/          # NestJS API
├── packages/
│   ├── types/        # TypeScript compartilhado
│   ├── validators/   # Schemas Zod
│   └── config/       # Configs compartilhadas
├── docs/             # Documentação
└── turbo.json
```

---

## 🔒 Segurança

- Content Security Policy (CSP) configurado
- JWT em cookies HttpOnly (não localStorage)
- Rate limiting com @nestjs/throttler
- Senhas com bcrypt (salt ≥ 12)
- Stripe Webhook Signature Verification
- CORS explicitamente configurado

---

## 🚢 Deploy

### Frontend (Vercel)
1. Faça fork do repositório
2. Importe no [Vercel](https://vercel.com)
3. Configure `Root Directory` para `apps/web`
4. Adicione as variáveis de ambiente
5. Deploy automático a cada push na `main`

### Backend (Railway)
1. Crie um projeto no [Railway](https://railway.app)
2. Adicione PostgreSQL e Redis
3. Configure `Root Directory` para `apps/api`
4. Adicione as variáveis de ambiente

---

## 📄 Licença

MIT — veja [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  Feito com ❤️ para quem vive na rua.
  <br />
  <strong>FreeRidez — Sem patrão. Só você e a rua.</strong>
</div>
