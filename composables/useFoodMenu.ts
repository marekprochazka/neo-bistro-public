import type Menu from '~/schemas/public/Menu';

export function useFoodMenu() {
  async function getAllMenus() {
    const { data, error } = await unpackResponse<Menu[]>(
      useFetch('/api/food-menu/list'),
    );
    if (error || !data) {
      throw error;
    }
    return data;
  }

  async function newMenuItem() {
    const { error } = await unpackResponse<void>(
      useFetch('/api/food-menu/new', {
        method: 'POST',
      }),
    );
    if (error) {
      useNotify('error', error?.message ?? 'Unknown error', 5000);
    }
  }

  async function deleteMenuItem(id: string) {
    const { error } = await useFetch(`/api/food-menu/${id}`, {
      method: 'DELETE',
    });
    if (error.value) {
      useNotify('error', error.value?.message ?? 'Unknown error', 5000);
    }
  }

  async function saveChanges(menu: Menu) {
    const { error } = await useFetch('/api/food-menu/edit', {
      method: 'PATCH',
      body: menu,
    });
    if (error.value) {
      useNotify('error', error.value?.message ?? 'Unknown error', 5000);
    }
  }

  return {
    getAllMenus,
    newMenuItem,
    deleteMenuItem,
    saveChanges,
  };
}
