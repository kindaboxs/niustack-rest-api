import { format } from 'date-fns'
import { pinoLogger } from 'hono-pino'
import pino from 'pino'
import pinoPretty from 'pino-pretty'
import { env } from '@/utils/env'

export default function logger() {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL,
      },
      pinoPretty()
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  })
}

const formatTime = () => format(new Date(), 'HH:mm:ss')

export const cusLogger = pino(
  {
    base: { pid: false },
    timestamp: () => `,"time":"${formatTime()}"`,
  },
  pinoPretty()
)
