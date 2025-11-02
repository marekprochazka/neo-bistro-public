import { Client } from 'pg';
import Menu from '~/schemas/public/Menu';
import { menu as zMenu } from '~/schemas/public/Menu';

export function useFoodMenu(client: Client) {
  async function getFoodMenuList(): Promise<Menu[]> {
    const { rows } = await client.query<Menu>(await _q('food-menu-list'));
    return zMenu.array().parse(rows);
  }

  async function newEmptyFoodMenuItem(): Promise<void> {
    await client.query(await _q('new-food-menu-item'));
  }

  async function editFoodMenuItem(payload: Menu) {
    await client.query<Menu>(await _q('edit-food-menu-item'), [
      payload.id,
      payload.ordering,
      payload.active_from,
      payload.active_to,
      payload.file_data,
      payload.file_name,
    ]);
  }

  async function deleteFoodMenuItem(id: string) {
    await client.query(await _q('delete-food-menu-item'), [id]);
  }
  return {
    getFoodMenuList,
    newEmptyFoodMenuItem,
    editFoodMenuItem,
    deleteFoodMenuItem,
  };
}
