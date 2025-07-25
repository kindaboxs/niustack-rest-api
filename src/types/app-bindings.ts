import type { Env } from 'hono'
import type { PinoLogger } from 'hono-pino'

export interface AppBindings extends Env {
  Variables: {
    logger: PinoLogger
  }
}
