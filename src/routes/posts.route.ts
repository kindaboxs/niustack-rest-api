import type { SuccessResponse } from '@/types/response'
import { zValidator } from '@hono/zod-validator'
import { db } from '@/db'
import { createRouter } from '@/lib/create-app'
import { isLoggedIn } from '@/middlewares'
import * as HttpStatusCodes from '@/utils/http-status-codes'
import { createPostSchema } from '@/validations/posts.validation'

const posts = createRouter().basePath('/posts')

posts.post('/', isLoggedIn, zValidator('json', createPostSchema), async c => {
  const { title, url, content } = c.req.valid('json')

  const user = c.get('user')!

  const post = await db.post.create({
    data: {
      title,
      url,
      content,
      userId: user.id,
    },
    select: {
      id: true,
    },
  })

  return c.json<SuccessResponse<{ postId: number }>>(
    {
      success: true,
      message: 'Post created',
      data: {
        postId: post.id,
      },
    },
    HttpStatusCodes.CREATED
  )
})

export default posts
