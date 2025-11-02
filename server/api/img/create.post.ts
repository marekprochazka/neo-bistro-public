import { zImageCreatePayload } from '~/types/api.types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { APIError } from '~/error/api.error';
import { IResponse } from '~/types';

export default defineEventHandler(
  async (event): Promise<IResponse<{ id: string }>> => {
    const payload = await readValidatedBody(event, (body) =>
      zImageCreatePayload.safeParse(body),
    );
    if (!payload.success) {
      return { data: null, error: APIError.fromZodError(payload.error) };
    }
    const client = await getConnection(event);
    const { createImg } = UseDatabase.img(client);
    const id = await createImg(payload.data);
    await client.end();
    return { data: { id }, error: null };
  },
);
