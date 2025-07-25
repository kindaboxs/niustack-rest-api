import type { NotFoundHandler } from 'hono'
import type { ErrorResponse } from '@/types/response'
import { NOT_FOUND } from '@/utils/http-status-codes'
import { NOT_FOUND as NOT_FOUND_MESSAGE } from '@/utils/http-status-phrases'

const notFound: NotFoundHandler = c => {
  return c.json<ErrorResponse>(
    {
      success: false,
      message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`,
    },
    NOT_FOUND
  )
}

export default notFound
