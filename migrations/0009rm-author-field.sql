-- rm-author-field

alter table blog_post drop constraint fk_blogpost_author_id;
alter table blog_post drop column author_id;