# next-cicd-app

Aplicação **Next.js 16** com pipeline completa de **CI/CD** usando **GitHub Actions** e deploy automático no **GitHub Pages**.

> 🌐 **Site publicado:** https://TheoRodrigues1.github.io/Project-NEXT-CICD-App  
> _(o link ficará ativo após o primeiro deploy automático)_

---

## ✨ Funcionalidades da Pipeline

| Etapa | Ferramenta | Descrição |
|---|---|---|
| Lint | ESLint | Valida a qualidade e padronização do código |
| Testes | Vitest + Testing Library | Executa testes unitários automaticamente |
| Build | Next.js (export estático) | Compila e gera os arquivos estáticos em `/out` |
| Deploy | GitHub Pages | Publica automaticamente a cada push na `main` |

---

## 🚀 Como configurar o deploy no GitHub Pages

### 1. Criar o repositório no GitHub

```bash
git remote add origin https://github.com/<seu-usuario>/<nome-do-repositorio>.git
git push -u origin main
```

### 2. Habilitar o GitHub Pages via GitHub Actions

No repositório GitHub, acesse:  
**Settings → Pages → Source → selecione "GitHub Actions"**

### 3. Fazer push — o deploy acontece automaticamente!

A cada push na branch `main`, a pipeline executa:
1. `npm ci` — instala as dependências
2. `npm run lint` — valida o código com ESLint
3. `npm run test` — executa os testes com Vitest
4. `npm run build` — compila a aplicação
5. Deploy automático no GitHub Pages

---

## 🔑 Secrets necessárias

| Secret | Uso |
|---|---|
| `GITHUB_TOKEN` | Fornecido automaticamente pelo GitHub Actions para publicar no GitHub Pages |

> Nenhuma configuração manual de secret é necessária para o GitHub Pages — o `GITHUB_TOKEN` é injetado automaticamente.

---

## 🛠️ Desenvolvimento local

```bash
# Instalar dependências
npm ci

# Rodar em modo de desenvolvimento
npm run dev

# Rodar lint
npm run lint

# Rodar testes
npm run test

# Rodar testes com cobertura
npm run test:coverage

# Build estático
npm run build
```

---

## 📁 Estrutura do projeto

```
next-cicd-app/
├── .github/
│   └── workflows/
│       └── main.yml          # Pipeline CI/CD
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Button.tsx        # Componente reutilizável
│   │   └── Button.test.tsx   # Testes unitários
│   └── test/
│       └── setup.ts          # Configuração do ambiente de teste
├── vitest.config.ts          # Configuração do Vitest
├── next.config.ts            # Configuração Next.js (export estático)
└── package.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
