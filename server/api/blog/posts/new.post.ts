import { IResponse } from '~/types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';

export default defineEventHandler(async (event): Promise<IResponse<null>> => {
  const client = await getConnection(event);
  const { newEmptyBlogPost } = UseDatabase.blog(client);
  await newEmptyBlogPost();
  await client.end();
  return { data: null, error: null };
});
