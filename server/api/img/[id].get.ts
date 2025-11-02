import { IResponse } from '~/types';
import Image from '~/schemas/public/Image';
import { APIError } from '~/error/api.error';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import z from 'zod';

export default defineEventHandler(async (event): Promise<IResponse<Image>> => {
  const id = z.string().parse(getRouterParam(event, 'id'));
  const client = await getConnection(event);
  const { getImg } = UseDatabase.img(client);
  const img = await getImg(id);
  if (!img) {
    return { data: null, error: new APIError('Not found', []) };
  }
  await client.end();
  return { data: img, error: null };
});
