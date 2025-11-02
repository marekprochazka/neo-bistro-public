import type { BlogPostAdminListRepresentation } from '~/types/api.types';
import type BlogPost from '~/schemas/public/BlogPost';
import type BlogPostCategory from '~/schemas/public/BlogPostCategory';
import type { T } from '~/types';

export function usePost() {
  async function saveChanges(post: BlogPostAdminListRepresentation) {
    const { error } = await useFetch('/api/blog/posts/edit', {
      method: 'PATCH',
      body: post,
    });
    if (error.value) {
      useNotify('error', error.value?.message ?? 'Unknown error', 5000);
    }
  }

  async function newPost() {
    const { error } = await unpackResponse<void>(
      useFetch('/api/blog/posts/new', {
        method: 'POST',
      }),
    );
    if (error) {
      useNotify('error', error?.message ?? 'Unknown error', 5000);
    }
  }

  async function deletePost(id: string) {
    const { error } = await useFetch(`/api/blog/posts/${id}`, {
      method: 'DELETE',
    });
    if (error.value) {
      useNotify('error', error.value?.message ?? 'Unknown error', 5000);
    }
  }

  async function getPostDetail(id: string): Promise<BlogPost | null> {
    const { data, error } = await unpackResponse<BlogPost>(
      useFetch(`/api/blog/posts/${id}`, {
        method: 'GET',
      }),
    );
    if (error) {
      throw error;
    }
    return data;
  }

  async function updatePostContent(id: string, content: string) {
    await useFetch(`/api/blog/posts/${id}/content`, {
      method: 'PATCH',
      body: { content },
    });
  }

  async function getAllPostsAdmin(t: T) {
    const { data, error } = await unpackResponse<
      BlogPostAdminListRepresentation[]
    >(useFetch('/api/blog/posts/list'));
    if (data) {
      return data;
    } else {
      useNotify('error', error?.message ?? t('base.error.unknown'));
      return [];
    }
  }

  async function getAllPostCategoriesAdmin(t: T) {
    const { data: catData, error: catError } = await unpackResponse<
      BlogPostCategory[]
    >(useFetch('/api/blog/categories/all'));
    if (catData) {
      return catData;
    } else {
      useNotify('error', catError?.message ?? t('base.error.unknown'));
      return [];
    }
  }

  return {
    saveChanges,
    newPost,
    deletePost,
    getPostDetail,
    updatePostContent,
    getAllPostsAdmin,
    getAllPostCategoriesAdmin,
  };
}
