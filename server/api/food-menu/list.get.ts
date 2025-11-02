import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { IResponse } from '~/types';
import Menu from '~/schemas/public/Menu';

export default defineEventHandler(async (event): Promise<IResponse<Menu[]>> => {
  const client = await getConnection(event);
  const { getFoodMenuList } = UseDatabase.foodMenu(client);
  const posts = await getFoodMenuList();
  await client.end();
  return { data: posts, error: null };
});
