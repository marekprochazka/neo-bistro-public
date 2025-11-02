import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { type IResponse } from '~/types';
import { APIError } from '~/error/api.error';
import z from 'zod';

export default defineEventHandler(async (event): Promise<IResponse<string>> => {
  const body = await readValidatedBody(event, (body) =>
    z.object({ email: z.string(), password: z.string() }).safeParse(body),
  );
  if (!body.success) {
    return { data: null, error: APIError.fromZodError(body.error) };
  }
  const client = await getConnection(event);
  const { login } = UseDatabase.auth(client);
  let result = null;
  try {
    result = await login({ ...body.data });
    await client.end();
  } catch (e) {
    await client.end();
    if (e instanceof APIError) {
      return { data: null, error: e as APIError };
    }
    throw e;
  }
  return { data: result, error: null };
});
