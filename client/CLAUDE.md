# Frontend

## Component Rules

- `ui/` components: no business logic, props only, fully reusable
- `tasks/` components: consume the useTasks hook, no direct fetch calls
- One component per file, named same as file

## Data Files

- `src/data/taskHelpers.ts` — label maps, status colors, date formatters

## Styling

- Tailwind CSS or plain CSS modules
