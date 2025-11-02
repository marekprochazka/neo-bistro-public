import type { Client } from 'pg';
import BlogPostCategory from '~/schemas/public/BlogPostCategory';
import { blogPostCategory as zBlogPostCategory } from '~/schemas/public/BlogPostCategory';
import { _q } from '~/server/utils/q';
import {
  BlogPostAdminListRepresentation,
  zBlogPostAdminListRepresentation,
} from '~/types/api.types';
import type BlogPost from '~/schemas/public/BlogPost';
import { blogPost as zBlogPost } from '~/schemas/public/BlogPost';

export function useBlog(client: Client) {
  async function getRootCategories(): Promise<BlogPostCategory[]> {
    const { rows } = await client.query<BlogPostCategory>(
      await _q('root-blog-post-categories'),
    );
    return zBlogPostCategory.array().parse(rows);
  }

  async function getBlogPostsAdmin(): Promise<
    BlogPostAdminListRepresentation[]
  > {
    const { rows } = await client.query<BlogPostAdminListRepresentation>(
      await _q('blog-posts-admin-list'),
    );
    return zBlogPostAdminListRepresentation.array().parse(rows);
  }

  async function editBlogPost(payload: BlogPostAdminListRepresentation) {
    const { categories } = payload;
    if (categories) {
      await client.query(await _q('remove-blog-post-categories'), [
        payload.id,
        categories,
      ]);

      for (const category of categories) {
        await client.query(await _q('add-blog-post-category'), [
          payload.id,
          category,
        ]);
      }
    }
    await client.query<BlogPostAdminListRepresentation>(
      await _q('edit-blog-post'),
      [
        payload.id,
        payload.title,
        payload.seo_name,
        payload.seo_description,
        payload.seo_keywords,
        payload.status,
      ],
    );
  }

  async function newEmptyBlogPost() {
    await client.query(await _q('new-empty-blog-post'), [
      `new-post-${Date.now()}`,
    ]);
  }

  async function deleteBlogPost(id: string) {
    await client.query(await _q('delete-blog-post'), [id]);
  }

  async function getBlogPostDetail(id: string): Promise<BlogPost | null> {
    const { rows } = await client.query<BlogPost>(
      await _q('blog-post-detail'),
      [id],
    );
    return zBlogPost.parse(rows[0]);
  }

  async function updatePostContent(id: string, content: string) {
    await client.query(await _q('update-blog-post-content'), [id, content]);
  }

  async function getAllCategories(): Promise<BlogPostCategory[]> {
    const { rows } = await client.query<BlogPostCategory>(
      await _q('all-blog-post-categories'),
    );
    return zBlogPostCategory.array().parse(rows);
  }

  return {
    getRootCategories,
    getBlogPostsAdmin,
    editBlogPost,
    newEmptyBlogPost,
    deleteBlogPost,
    getBlogPostDetail,
    updatePostContent,
    getAllCategories,
  };
}
