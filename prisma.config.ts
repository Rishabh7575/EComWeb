import 'dotenv/config'
import { defineConfig } from "prisma/config";

// Load .env early (Prisma runs this file before it loads env itself).
// Using dotenv ensures process.env values from .env are available here.
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    'prisma.config.ts: DATABASE_URL environment variable is required. Set it in your shell or a .env file before running prisma commands.'
  );
}

export default defineConfig({
  datasource: {
    url: databaseUrl,
  },
});
