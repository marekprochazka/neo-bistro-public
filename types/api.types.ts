import type UserProfile from '~/schemas/public/UserProfile';
import { userProfileId as zUserProfileId } from '~/schemas/public/UserProfile';
import { z } from 'zod';
import type BlogPost from '~/schemas/public/BlogPost';
import type Image from '~/schemas/public/Image';

export interface UserProfileLite {
  id: UserProfile['id'];
  email: UserProfile['email'];
  first_name: UserProfile['first_name'];
  last_name: UserProfile['last_name'];
  is_admin: UserProfile['is_admin'];
}

export const zUserProfileLite = z.object({
  id: zUserProfileId,
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  is_admin: z.boolean(),
}) as unknown as z.Schema<UserProfileLite>;

export interface BlogPostAdminListRepresentation {
  id: BlogPost['id'];
  title: BlogPost['title'];
  seo_name: BlogPost['seo_name'];
  seo_description: BlogPost['seo_description'];
  seo_keywords: BlogPost['seo_keywords'];
  status: BlogPost['status'];
  categories: string[] | null;
}

export const zBlogPostAdminListRepresentation = z.object({
  id: z.string(),
  title: z.string(),
  seo_name: z.string(),
  seo_description: z.string(),
  seo_keywords: z.string(),
  status: z.string(),
  categories: z.array(z.string()).nullable(),
}) as unknown as z.Schema<BlogPostAdminListRepresentation>;

export interface IImageCreatePayload {
  name: Image['name'];
  data: Image['data'];
  alt: Image['alt'];
  metadata: Image['metadata'];
}

export const zImageCreatePayload = z.object({
  name: z.string(),
  data: z.string(),
  alt: z.string(),
  metadata: z.string(),
}) as unknown as z.Schema<IImageCreatePayload>;
