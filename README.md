# IA Marquesano

Estrutura inicial de uma plataforma de geração de vídeos por API externa, com Kling AI como primeiro provedor previsto.

## Desenvolvimento

Requer Node.js 20.9 ou superior e npm.

```sh
npm ci
npm run dev
```

Acesse http://localhost:3000. No PowerShell com restrição de scripts, use `npm.cmd` em lugar de `npm`.

## Validação

```sh
npm run lint
npm run build
```

Para executar o build localmente: `npm start`.

## Estrutura

- `src/app`: página inicial, layout e estilos com App Router e Tailwind CSS.
- `src/types/video.ts`: contratos internos para solicitações e tarefas de geração.
- `src/lib/video/providers/kling.ts`: ponto de extensão do futuro adaptador Kling AI.
- `.env.example`: nomes reservados para configuração futura, sem credenciais.

A interface é demonstrativa e a geração está desativada. Não há chamadas à Kling AI, rotas de geração, banco de dados, Neon, Prisma, R2, autenticação ou armazenamento permanente de vídeos. Nenhuma variável de ambiente é necessária para executar esta versão.

Na próxima etapa, implementar o adaptador e as rotas de servidor conforme a documentação oficial da Kling AI, mantendo segredos no servidor e utilizando as URLs temporárias do provedor. Os tipos atuais são contratos da aplicação, não uma representação do payload oficial.

Repositório: https://github.com/leomarquesanousa-lab/ia-marquesano

Branch principal: `main`. Nenhum deploy está configurado.
