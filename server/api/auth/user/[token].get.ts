import { IResponse } from '~/types';
import { APIError } from '~/error/api.error';
import { UseDatabase } from '~/server/composables/useDatabase/index.useDatabase';
import { UserProfileLite } from '~/types/api.types';

export default defineEventHandler(
  async (event): Promise<IResponse<UserProfileLite | null>> => {
    const token = getRouterParam(event, 'token');
    if (!token) {
      return { data: null, error: new APIError('Token is required', []) };
    }
    const client = await getConnection(event);
    const { getLoggedUser } = UseDatabase.auth(client);
    const user = await getLoggedUser(token);
    await client.end();
    return { data: user ? { ...user } : null, error: null };
  },
);
