import z from 'zod';

type QueryType =
  | 'active-user'
  | 'root-blog-post-categories'
  | 'blog-posts-admin-list'
  | 'edit-blog-post'
  | 'new-empty-blog-post'
  | 'delete-blog-post'
  | 'blog-post-detail'
  | 'update-blog-post-content'
  | 'all-blog-post-categories'
  | 'add-blog-post-category'
  | 'remove-blog-post-categories'
  | 'img-get'
  | 'img-create'
  | 'img-list'
  | 'img-delete'
  | 'new-food-menu-item'
  | 'edit-food-menu-item'
  | 'delete-food-menu-item'
  | 'food-menu-list';

/**
 * @return {Promise<string>}: SQL query
 */
export async function _q(type: QueryType): Promise<string> {
  const query = await useStorage('assets:queries').getItem(`${type}.sql`);
  return z.string().parse(query);
}
