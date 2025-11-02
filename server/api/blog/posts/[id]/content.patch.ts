import { IResponse } from '~/types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import z from 'zod';
import { APIError } from '~/error/api.error';

export default defineEventHandler(async (event): Promise<IResponse<null>> => {
  const id = z.string().parse(getRouterParam(event, 'id'));
  const body = await readValidatedBody(event, (body) =>
    z.object({ content: z.string() }).safeParse(body),
  );
  if (!body.success) {
    return { data: null, error: APIError.fromZodError(body.error) };
  }
  const client = await getConnection(event);
  const { updatePostContent } = UseDatabase.blog(client);
  try {
    await updatePostContent(id, body.data.content);
    await client.end();
  } catch (e) {
    await client.end();
    if (e instanceof APIError) {
      return { data: null, error: e as APIError };
    }
    throw e;
  }
  return { data: null, error: null };
});
