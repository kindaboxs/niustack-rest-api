import type { AppBindings } from '@/types/app-bindings'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { logger, notFound, onError, serveEmojiFavicon } from '@/middlewares'
import { env } from '@/utils/env'

export function createRouter() {
  return new Hono<AppBindings>({
    strict: false,
  })
}

const allowedOrigins = env.PUBLIC_CORS_ORIGINS.split(',')

const corsOptions = {
  origin: allowedOrigins,
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}

export default function createApp() {
  const app = createRouter()
  app.use('*', cors(corsOptions))
  app.use('*', logger())
  app.use('*', prettyJSON())
  app.use('*', serveEmojiFavicon('🔥'))

  app.onError(onError)
  app.notFound(notFound)

  return app
}
