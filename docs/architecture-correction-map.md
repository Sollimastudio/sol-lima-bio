# Mapa de Correcao da Arquitetura - Vercel

## Problema principal

O projeto esta misturando duas arquiteturas:

1. Vite + Express
2. Next.js App Router

O package.json atual usa Vite e Express:

- dev: vite --host
- build: vite build + esbuild server/index.ts
- start: node dist/index.js

Mas varias telas e rotas recentes foram criadas no padrao Next:

- src/app/.../page.tsx
- src/app/api/.../route.ts

Esses arquivos nao sao consumidos automaticamente pelo Vite. Por isso o deploy no Vercel pode falhar ou publicar sem mostrar as paginas esperadas.

## Diagnostico direto

A causa mais provavel da falha no Vercel e desalinhamento de framework.

O Vercel foi configurado como Next.js em vercel.json, mas o projeto real esta estruturado como Vite/Express.

## Decisao tecnica necessaria

Escolher um unico caminho.

### Caminho A - Manter Vite + Express

Melhor para continuar com a estrutura atual.

O que precisa fazer:

1. Remover ou ignorar src/app do Next.
2. Criar telas dentro da estrutura real do Vite.
3. Criar rotas de front usando wouter ou roteamento interno.
4. Manter APIs no Express em server/publisherRoutes.ts.
5. Ajustar vercel.json para nao declarar framework nextjs.
6. Garantir que Vercel rode o build e sirva dist.

Vantagem: menor refatoracao agora.
Desvantagem: APIs Express no Vercel podem exigir configuracao adicional ou adaptacao serverless.

### Caminho B - Migrar para Next.js

Melhor se o objetivo for usar App Router, rotas API e Vercel com menos atrito.

O que precisa fazer:

1. Trocar package.json para Next.
2. Remover Vite/Express ou deixar separado.
3. Manter src/app como fonte principal.
4. Converter endpoints Express para src/app/api.
5. Ajustar build para next build.
6. Corrigir imports e dependencias.

Vantagem: Vercel fica muito mais natural.
Desvantagem: refatoracao maior agora.

## Recomendacao

Para vender acesso e evoluir o Publisher com HTML, PDF, DOCX, upload, memoria e API, o melhor caminho e migrar para Next.js.

Motivo:

- Vercel reconhece Next com facilidade.
- API routes ficam integradas.
- As telas ja criadas em src/app passam a fazer sentido.
- O Publisher precisa de backend e frontend juntos.
- Menos gambiarra para exportacoes.

## Plano de correcao recomendado

### Fase 1 - Parar o conflito

1. Definir Next.js como arquitetura oficial.
2. Atualizar package.json para Next.
3. Manter src/app como pasta principal.
4. Remover dependencia do server/index.ts para deploy inicial.
5. Converter /api/publisher/docx para src/app/api/publisher/docx/route.ts.

### Fase 2 - Validar build

1. Rodar npm install.
2. Rodar npm run build.
3. Corrigir erros de import.
4. Corrigir componentes client com 'use client'.
5. Corrigir uso de bibliotecas server-only.

### Fase 3 - Deploy no Vercel

1. vercel.json com framework nextjs.
2. Build command: npm run build.
3. Output automatico Next.
4. Testar rotas:
   - /publisher
   - /publisher/workspace
   - /publisher/mvp
   - /artifact
   - /html-render
   - /export-manifest
   - /docx-export

### Fase 4 - Exportacoes

1. HTML render funcionando.
2. DOCX funcionando em route handler.
3. PDF depois via HTML render.
4. ZIP final depois de HTML, PDF e DOCX.

## Arquivos que precisam de atencao

### Next criados recentemente

- src/app/publisher/page.tsx
- src/app/publisher/workspace/page.tsx
- src/app/publisher/mvp/page.tsx
- src/app/artifact/page.tsx
- src/app/html-render/page.tsx
- src/app/export-manifest/page.tsx
- src/app/docx-export/page.tsx
- src/app/api/publisher/artifact/route.ts
- src/app/api/publisher/render-html/route.ts
- src/app/api/publisher/export-manifest/route.ts

### Express atual

- server/index.ts
- server/publisherRoutes.ts

### Risco

Manter os dois ao mesmo tempo aumenta chance de erro no deploy.

## Decisao final recomendada

Migrar para Next.js agora.

Isso vai alinhar o projeto com o Vercel e com as rotas que ja foram criadas.