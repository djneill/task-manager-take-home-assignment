# Task Manager Monorepo

## Structure

- `client/` — Vite + React + TypeScript frontend
- `server/` — Node + Express backend

## Commands

- `npm run dev` — starts both client and server via concurrently
- `npm run dev --prefix client` — frontend only (port 5173)
- `npm run dev --prefix server` — backend only (port 3001)

## Conventions

- TypeScript everywhere, no `any`
- Shared types live in each package's `src/types/task.ts` — keep them in sync
- Components are separated: `ui/` for reusable primitives, `tasks/` for feature components
- Data files (`data/`) hold static maps, formatters, or seed data — not logic
- All API calls go through `hooks/useTasks.ts`, never directly in components

## What NOT to do

- Don't put API fetch logic in components
- Don't create new files in root — work inside client/ or server/
