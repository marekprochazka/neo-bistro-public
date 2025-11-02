import { zBlogPostAdminListRepresentation } from '~/types/api.types';
import { APIError } from '~/error/api.error';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { IResponse } from '~/types';

export default defineEventHandler(async (event): Promise<IResponse<null>> => {
  const body = await readValidatedBody(event, (body) =>
    zBlogPostAdminListRepresentation.safeParse(body),
  );
  if (!body.success) {
    return { data: null, error: APIError.fromZodError(body.error) };
  }
  const client = await getConnection(event);
  const { editBlogPost } = UseDatabase.blog(client);
  try {
    await editBlogPost({ ...body.data });
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
