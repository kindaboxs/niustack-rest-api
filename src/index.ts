import { serve } from '@hono/node-server'
import app from '@/app'
import { cusLogger } from '@/middlewares/logger'
import { env } from '@/utils/env'

const port = env.PORT

cusLogger.info(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
