import createApp from '@/lib/create-app'
import health from '@/routes/health.route'
import index from '@/routes/index.route'

const app = createApp()

app.get('/', c => {
  return c.redirect('/api/v1')
})

const routes = [health, index] as const

routes.forEach(route => {
  app.basePath('/api/v1').route('/', route)
})

export type AppType = (typeof routes)[number]

export default app
