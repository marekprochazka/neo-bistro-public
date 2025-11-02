insert into blog_post (title, seo_name, seo_description, seo_keywords, status, content)
values ($1, $1, '', '', (select id from blog_post_status where identifier = 'draft'), null)
