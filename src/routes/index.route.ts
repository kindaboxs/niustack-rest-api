import { createRouter } from '@/lib/create-app'
import * as HttpStatusCodes from '@/utils/http-status-codes'

const index = createRouter()

index.get('/', c => {
  return c.json(
    {
      name: 'Niustack REST API',
      version: '1.0.0',
      description: 'A REST API built with Hono',
      author: '@mrboxs',
    },
    HttpStatusCodes.OK
  )
})

export default index
