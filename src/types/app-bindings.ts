import type { Env } from 'hono'
import type { PinoLogger } from 'hono-pino'
import type { Session, User } from '@/lib/auth/types'
import type { PrismaClient } from '@/lib/generated/prisma/client'

export type prisma = PrismaClient

export interface AppBindings extends Env {
  Bindings: {
    db: prisma
  }
  Variables: {
    logger: PinoLogger
    user: User | null
    session: Session | null
  }
}
