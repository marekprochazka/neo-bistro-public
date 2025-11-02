import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { IResponse } from '~/types';
import type Image from '~/schemas/public/Image';
export default defineEventHandler(
  async (event): Promise<IResponse<Image[]>> => {
    const client = await getConnection(event);
    const { listImg } = UseDatabase.img(client);
    const data = await listImg();
    await client.end();
    return { data, error: null };
  },
);
