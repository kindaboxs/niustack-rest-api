import type { Env } from 'hono'
import type { PinoLogger } from 'hono-pino'
import type { Session, User } from '@/lib/auth/types'

export interface AppBindings extends Env {
  Variables: {
    logger: PinoLogger
    user: User | null
    session: Session | null
  }
}
