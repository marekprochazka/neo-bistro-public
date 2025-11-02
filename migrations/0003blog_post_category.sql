-- blog_post_category

create table blog_post_category (
    id uuid default uuid_generate_v4() primary key,
    identifier text not null unique,
    label text not null,
    description text,
    parent_id uuid references blog_post_category(id) on delete set null,

    seo_title varchar(255) not null unique,
    seo_description varchar(255),
    seo_keywords varchar(255),

    x_created timestamp default current_timestamp
);

create table blog_post_blog_post_category (
    blog_post_id uuid references blog_post(id) on delete cascade,
    blog_post_category_id uuid references blog_post_category(id) on delete cascade,
    primary key (blog_post_id, blog_post_category_id)
);