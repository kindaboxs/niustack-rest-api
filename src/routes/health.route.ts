import { createRouter } from '@/lib/create-app'
import * as HttpStatusCodes from '@/utils/http-status-codes'
import * as HttpStatusPhrases from '@/utils/http-status-phrases'

const health = createRouter()

health.get('/health', c => {
  return c.json(
    {
      success: true,
      message: HttpStatusPhrases.OK,
      timestamp: new Date().toISOString(),
    },
    HttpStatusCodes.OK
  )
})

export default health
