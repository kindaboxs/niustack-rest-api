import createApp from '@/lib/create-app'
import auth from '@/routes/auth.routes'
import health from '@/routes/health.route'
import index from '@/routes/index.route'
import posts from '@/routes/posts.route'

const app = createApp()

app.get('/', c => {
  return c.redirect('/api')
})

const routes = [auth, health, index, posts] as const

routes.forEach(route => {
  app.basePath('/api').route('/', route)
})

export type AppType = (typeof routes)[number]

export default app
