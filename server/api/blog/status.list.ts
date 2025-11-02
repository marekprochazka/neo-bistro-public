import type BlogPostStatus from '~/schemas/public/BlogPostStatus';
import { blogPostStatus as zBlogPostStatus } from '~/schemas/public/BlogPostStatus';
import z from 'zod';
export default defineEventHandler(async (event) => {
  const client = await getConnection(event);
  const result = await client.query<BlogPostStatus>(
    'SELECT * FROM blog_post_status',
  );

  await client.end();
  return z.array(zBlogPostStatus).parse(result.rows);
});
