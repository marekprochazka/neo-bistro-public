import { APIError } from '~/error/api.error';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { IResponse } from '~/types';
import { menu as zMenu } from '~/schemas/public/Menu';

export default defineEventHandler(async (event): Promise<IResponse<null>> => {
  const body = await readValidatedBody(event, (body) =>
    zMenu.safeParse({
      ...(body ?? {}),
      // @ts-ignore
      active_from: new Date(body.active_from),
      // @ts-ignore
      active_to: new Date(body.active_to),
      // @ts-ignore
      created_at: new Date(body.created_at),
    }),
  );
  if (!body.success) {
    return { data: null, error: APIError.fromZodError(body.error) };
  }
  const client = await getConnection(event);
  const { editFoodMenuItem } = UseDatabase.foodMenu(client);
  try {
    await editFoodMenuItem({ ...body.data });
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
