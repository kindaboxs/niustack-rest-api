import type { AppBindings } from '@/types/app-bindings'
import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { logger, notFound, onError, serveEmojiFavicon } from '@/middlewares'

export function createRouter() {
  return new Hono<AppBindings>({
    strict: false,
  })
}

export default function createApp() {
  const app = createRouter()
  app.use('*', logger())
  app.use('*', prettyJSON())
  app.use('*', serveEmojiFavicon('🔥'))

  app.onError(onError)
  app.notFound(notFound)

  return app
}
