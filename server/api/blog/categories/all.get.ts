import BlogPostCategory from '~/schemas/public/BlogPostCategory';
import { IResponse } from '~/types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';

export default defineEventHandler(
  async (event): Promise<IResponse<BlogPostCategory[]>> => {
    const client = await getConnection(event);
    const { getAllCategories } = UseDatabase.blog(client);
    const categories = await getAllCategories();
    await client.end();
    return { data: categories, error: null };
  },
);
