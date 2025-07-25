import { auth } from '@/lib/auth'
import { createRouter } from '@/lib/create-app'

const authRoute = createRouter().basePath('/auth')

authRoute.on(['POST', 'GET'], '/**', c => {
  return auth.handler(c.req.raw)
})

export default authRoute
