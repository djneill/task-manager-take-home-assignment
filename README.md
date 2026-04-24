# Task Manager

## Overview

A full-stack task manager built with Vite + React on the client and Node + Express on the server. It demonstrates end-to-end wiring of a monorepo — shared types, a REST API with a persistent data layer, a custom React hook for all server communication, and a component hierarchy that separates reusable UI primitives from feature components.

---

## Tech Stack

**Client**
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4

**Server**
- Node.js + Express 5 + TypeScript
- ts-node + nodemon (dev)
- JSON file as data store

---

## Getting Started

### Prerequisites

- Node.js 19 or higher
- npm

### Installation

```bash
git clone <repo-url>
cd task-manager

# Install root dependencies (concurrently)
npm install

# Install client and server dependencies
npm install --prefix client
npm install --prefix server
```

### Running Locally

```bash
npm run dev
```

This starts both services concurrently:

| Service | URL |
|---------|-----|
| Client  | http://localhost:5173 |
| Server  | http://localhost:3001 |

---

## Project Structure

```
task-manager/
├── package.json              # Root — runs both services via concurrently
├── client/
│   └── src/
│       ├── types/task.ts     # Shared Task interface
│       ├── hooks/useTasks.ts # All API calls — no fetch logic in components
│       ├── data/             # Label maps, formatters, static helpers
│       └── components/
│           ├── ui/           # Reusable primitives (Button, Input, Badge)
│           └── tasks/        # Feature components (TaskForm, TaskItem, TaskList)
└── server/
    └── src/
        ├── types/tasks.ts    # Shared Task interface (kept in sync with client)
        ├── data/
        │   ├── store.ts      # All file read/write — routes never touch JSON directly
        │   └── tasks.json    # Source of truth, committed as empty array
        ├── routes/tasks.ts   # REST route handlers
        └── index.ts          # Express setup, middleware, mount point
```

---

## Architecture Decisions & Trade-offs

**Vite + Express over Next.js**
I chose to wire the client and server separately rather than reach for Next.js. It keeps the boundaries explicit — the API is a standalone Express server, the client is a standalone Vite app — and demonstrates the ability to set up the full stack without a framework doing it for you.

**Routes + data layer over full MVC**
With a single resource (tasks), a controller layer would have been indirection without value. `store.ts` owns all file I/O and `routes/tasks.ts` owns HTTP concerns. That's the right split for this scope.

**JSON file over in-memory store**
An in-memory store would have been simpler, but tasks would be lost on every server restart. A JSON file costs almost nothing to implement and means the app behaves like a real persistent system — no database setup required for a take-home.

**`tasks.json` committed as an empty array**
Committing `[]` means the app works immediately after cloning with no manual setup steps. The alternative — gitignoring it and documenting a manual step — adds unnecessary friction.

**CORS scoped to `localhost:5173`**
A wildcard origin (`*`) would have been easier but is unnecessarily permissive even in development. Scoping it to the Vite dev server is a small discipline that reflects how I'd approach it in production.

**Re-fetch on mount, local state updates after mutations**
I re-fetch the full list once on mount to get authoritative server state. After that, mutations update local state directly using the server's response body rather than re-fetching — this keeps the UI snappy without optimistic updates and without stale local guesses.

---

## If I Were to Continue

- **Replace the JSON store with a real database.** SQLite via better-sqlite3 would be a natural next step — same zero-config story, but with proper querying, transactions, and no risk of concurrent write corruption.
- **Add optimistic updates with rollback.** The current approach updates state after the server responds. With a bit more state management, mutations could apply immediately and roll back on error, which would make the UI feel noticeably faster.
- **Surface errors as toasts instead of inline text.** The current error display is functional but blunt. A lightweight toast system would handle transient errors (network failure, server down) more gracefully without disrupting the layout.
# task-manager
