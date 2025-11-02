import type { Client } from 'pg';
import { useAuth } from './auth.useDatabase';
import { useBlog } from './blog.useDatabase';
import { useImg } from '~/server/composables/useDatabase/img.useDatabase';
import { useFoodMenu } from './foodMenu.useDatabse';

export class UseDatabase {
  static auth(client: Client) {
    return useAuth(client);
  }

  static blog(client: Client) {
    return useBlog(client);
  }

  static img(client: Client) {
    return useImg(client);
  }

  static foodMenu(client: Client) {
    return useFoodMenu(client);
  }
}
