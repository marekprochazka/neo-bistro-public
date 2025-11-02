import { IResponse } from '~/types';
import z from 'zod';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { APIError } from '~/error/api.error';

export default defineEventHandler(
  async (event): Promise<IResponse<{ valid: boolean }>> => {
    const body = await readValidatedBody(event, (body) =>
      z.object({ token: z.string() }).safeParse(body),
    );
    if (!body.success) {
      return { data: null, error: APIError.fromZodError(body.error) };
    }
    const client = await getConnection(event);
    const { isTokenValid } = UseDatabase.auth(client);
    const isValid = await isTokenValid(body.data.token);

    await client.end();
    return { data: { valid: isValid }, error: null };
  },
);
