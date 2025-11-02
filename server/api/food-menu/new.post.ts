import { IResponse } from '~/types';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';

export default defineEventHandler(async (event): Promise<IResponse<null>> => {
  const client = await getConnection(event);
  const { newEmptyFoodMenuItem } = UseDatabase.foodMenu(client);
  await newEmptyFoodMenuItem();
  await client.end();
  return { data: null, error: null };
});
