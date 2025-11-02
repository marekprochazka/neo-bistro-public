-- initial

drop table if exists test;

create table user_profile
(
    id            uuid         not null primary key,
    email         varchar(255) not null,
    password      varchar(255) not null,
    is_anonymous  boolean      not null,
    is_admin      boolean      not null,
    is_active     boolean      not null,
    is_subscribed boolean      not null,
    x_created     timestamp    not null,
    first_name    varchar(255) not null,
    last_name     varchar(255) not null
);

create table blog_post_status
(
    id         uuid         not null primary key,
    identifier varchar(255) not null unique,
    label      varchar(255) not null,
    x_created  timestamp    not null
);

create table blog_post
(
    id              uuid         not null primary key,
    author_id       uuid         not null,
    title           varchar(255) not null,
    seo_name        varchar(255) not null unique,
    seo_description varchar(255) not null,
    seo_keywords    varchar(255) not null,
    status          uuid         not null,
    x_created       timestamp    not null
);

alter table blog_post
    add constraint fk_blogpost_author_id foreign key (author_id) references user_profile (id);
alter table blog_post
    add constraint fk_blogpost_status foreign key (status) references blog_post_status (id);

