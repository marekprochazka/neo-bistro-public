update blog_post
set title = $2,
    seo_name = $3,
    seo_description = $4,
    seo_keywords = $5,
    status = $6
where id = $1
