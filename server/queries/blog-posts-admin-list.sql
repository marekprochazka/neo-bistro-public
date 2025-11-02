-- types/api.types.ts -> BlogPostAdminListRepresentation

select blog_post.id, title, seo_name, seo_description, seo_keywords, status,
       (select array_agg(blog_post_category_id)
        from blog_post_blog_post_category
        where blog_post_id = blog_post.id ) as categories
from blog_post
order by blog_post.x_created desc
