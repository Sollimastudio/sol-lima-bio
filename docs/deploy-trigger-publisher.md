# Deploy Trigger - Publisher Recovery

Este arquivo foi criado para disparar um novo deploy do projeto Tronco IA apos a correcao do tsconfig para Next.js.

Objetivo imediato:
- garantir que o Vercel tente compilar o commit mais recente;
- validar se /publisher entra no novo build;
- parar de redeployar o commit antigo 77f4cbe.

