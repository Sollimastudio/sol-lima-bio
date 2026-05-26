# Guia de Deploy no Vercel

## Status atual

O projeto ja possui package.json e vercel.json.

## Como conectar

1. Entrar no Vercel
2. Clicar em Add New Project
3. Importar o repositorio Sollimastudio/Tronco-ia
4. Selecionar branch main
5. Framework: Next.js
6. Build command: npm run build
7. Install command: npm install
8. Deploy

## Rotas uteis para testar

- /publisher
- /publisher/workspace
- /publisher/mvp
- /artifact
- /html-render

## Possiveis erros

Se o build falhar, revisar:

- imports com caminhos errados
- arquivos duplicados
- dependencias ausentes
- Tailwind config
- uso de any no lint, se lint estiver obrigatorio

## Observacao

O deploy do app externo nao e obrigatorio para liberar o GPT vitrine no ChatGPT.
O GPT pode ser publicado antes do app estar completo.