## Copilot instructions for GoCart (Next.js + Tailwind + Redux + Prisma)

Be concise and make edits that follow the repository's conventions. Prefer small, focused changes and mention files you edit.

- Big picture: This is a Next.js (app router) multi-vendor e-commerce app.
  - Frontend: `app/` (app-router) with client components using `use client` where needed.
  - Global state: Redux Toolkit (store factory in `lib/store.js`, Provider in `app/StoreProvider.js`). Client components access state with `useSelector`/`useDispatch` (see `components/Navbar.jsx`).
  - Auth: Clerk is used for authentication. Middleware is `middleware.ts` and `ClerkProvider` is applied in `app/layout.jsx`.
  - Persistence / backend models: Prisma schema in `prisma/schema.prisma` (Postgres via `DATABASE_URL` / `DIRECT_URL`).

- Dev workflows / commands (copyable):
  - Install: `npm install`
  - Dev: `npm run dev` (runs `next dev --turbopack` per `package.json`)
  - Build: `npm run build`, Start: `npm run start`
  - Lint: `npm run lint`

- Project conventions & patterns (concrete):
  - App router structure: pages live under `app/`, including route groups like `app/(public)/`, `app/store/`, and `admin/`.
  - Client vs Server components: Files that import browser-only APIs (hooks, `useState`, `react-redux`) include `"use client"` at the top. Follow this pattern when converting components.
  - Global store: Use `makeStore()` in `lib/store.js`. When adding a new slice, create `lib/features/<feature>/<feature>Slice.js` and add its reducer to `lib/store.js`.
    - Example: `lib/features/cart/cartSlice.js` is wired into `lib/store.js` and consumed in `components/Navbar.jsx` via `useSelector(state => state.cart.total)`.
  - Provider: Use `app/StoreProvider.js` to ensure a single client store instance (it uses `useRef`). Do not recreate the store per render.

- Authentication & routing notes:
  - `middleware.ts` runs Clerk middleware for non-static paths and API routes; be mindful that middleware affects route matching.
  - `ClerkProvider` wraps the app in `app/layout.jsx`. For user info use Clerk hooks (see `components/Navbar.jsx` importing `useUser`).

- Data / Database guidance:
  - Prisma models are the source-of-truth for the API shape (see `prisma/schema.prisma`). Required fields are documented in comments inside the schema.
  - Expect environment variables: `DATABASE_URL` and `DIRECT_URL`. If you need to run migrations or generate the client, use Prisma CLI locally (not included in package.json here).

- Styling / assets:
  - Tailwind is used (see `globals.css`). Icons use `lucide-react`.
  - `next.config.mjs` sets `images.unoptimized = true` — the project intentionally bypasses Next.js image optimization.

- Integration points & external deps to note:
  - Clerk (`@clerk/nextjs`) for auth (middleware & provider).
  - Prisma (Postgres) for persistence; DB-related work should check `prisma/schema.prisma`.
  - Redux Toolkit (`@reduxjs/toolkit`) and `react-redux` for client state.

- When making changes, include small, verifiable updates:
  - Add a slice: create slice file in `lib/features`, wire it in `lib/store.js`, update tests or a small demo component.
  - Add a route: create under `app/` using the app-router conventions and follow `use client` when you need client hooks.

- Examples to copy/paste:
  - Navigate to search results in a client component (already used in `components/Navbar.jsx`):
    router.push(`/shop?search=${search}`)
  - Access global cart total in a client component:
    const cartCount = useSelector(state => state.cart.total)

If anything in this file looks incomplete or you'd like more examples (e.g., creating migrations or wiring Clerk backend features), tell me which area and I'll expand with targeted guidance.
