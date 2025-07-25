import { defineConfig } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
  earlyAccess: true,
  schema: './prisma/schema',
  migrations: {
    path: './src/db/migrations',
  },
})
