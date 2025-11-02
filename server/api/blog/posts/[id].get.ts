import BlogPost from '~/schemas/public/BlogPost';
import { IResponse } from '~/types';
import z from 'zod';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { APIError } from '~/error/api.error';

export default defineEventHandler(
  async (event): Promise<IResponse<BlogPost>> => {
    const id = z.string().parse(getRouterParam(event, 'id'));
    const client = await getConnection(event);
    const { getBlogPostDetail } = UseDatabase.blog(client);
    const post = await getBlogPostDetail(id);
    if (!post) {
      return { data: null, error: new APIError('Not found', []) };
    }
    await client.end();
    return { data: post, error: null };
  },
);
