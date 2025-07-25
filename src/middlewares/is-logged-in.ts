import type { AppBindings } from '@/types/app-bindings'
import { createMiddleware } from 'hono/factory'
import { HTTPException } from 'hono/http-exception'
import { auth } from '@/lib/auth'
import * as HttpStatusCodes from '@/utils/http-status-codes'

const isLoggedIn = createMiddleware<AppBindings>(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers })

  if (!session) {
    throw new HTTPException(HttpStatusCodes.UNAUTHORIZED, {
      message: 'Unauthorized',
    })
  }

  c.set('user', session.user)
  c.set('session', session.session)
  return next()
})

export default isLoggedIn
