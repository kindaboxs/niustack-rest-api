import { z } from 'zod'

export const createPostSchema = z
  .object({
    title: z
      .string()
      .min(3, { message: 'Title must be atleast 3 chars' })
      .max(300, 'Title too long'),
    url: z
      .string()
      .trim()
      .url({ message: 'URL must be a valid URL' })
      .optional()
      .or(z.literal('')),
    content: z.string().max(5000, 'Content too long').optional(),
  })
  .refine(data => data.url || data.content, {
    message: 'Either URL or Content is required',
    path: ['url', 'content'],
  })
