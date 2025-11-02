import { IResponse } from '~/types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import z from 'zod';

export default defineEventHandler(async (event): Promise<IResponse<null>> => {
  const id = z.string().parse(getRouterParam(event, 'id'));
  const client = await getConnection(event);
  const { deleteBlogPost } = UseDatabase.blog(client);
  await deleteBlogPost(id);
  await client.end();
  return { data: null, error: null };
});
