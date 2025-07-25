import createApp from '@/lib/create-app'
import auth from '@/routes/auth.routes'
import health from '@/routes/health.route'
import index from '@/routes/index.route'

const app = createApp()

app.get('/', c => {
  return c.redirect('/api')
})

const routes = [auth, health, index] as const

routes.forEach(route => {
  app.basePath('/api').route('/', route)
})

export type AppType = (typeof routes)[number]

export default app
