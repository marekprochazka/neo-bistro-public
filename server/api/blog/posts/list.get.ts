import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { IResponse } from '~/types';
import { BlogPostAdminListRepresentation } from '~/types/api.types';
export default defineEventHandler(
  async (event): Promise<IResponse<BlogPostAdminListRepresentation[]>> => {
    const client = await getConnection(event);
    const { getBlogPostsAdmin } = UseDatabase.blog(client);
    const posts = await getBlogPostsAdmin();
    await client.end();
    return { data: posts, error: null };
  },
);
