# Backend

## Routes

- All task routes in `src/routes/tasks.ts`
- Mounted at `/api/tasks` in `index.ts`

## Data Layer

- `src/data/store.ts` handles all file read/write — routes never touch the JSON directly
- `src/data/tasks.json` is the source of truth

## Types

- Keep `src/types/task.ts` in sync with client types
