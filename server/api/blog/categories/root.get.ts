import BlogPostCategory from '~/schemas/public/BlogPostCategory';
import { IResponse } from '~/types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';

export default defineEventHandler(
  async (event): Promise<IResponse<BlogPostCategory[]>> => {
    const client = await getConnection(event);
    const { getRootCategories } = UseDatabase.blog(client);
    const categories = await getRootCategories();
    await client.end();
    return { data: categories, error: null };
  },
);
