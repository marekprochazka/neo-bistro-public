-- initial-next
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

alter table user_profile alter column x_created set default current_timestamp;
alter table blog_post_status alter column x_created set default current_timestamp;
alter table blog_post alter column x_created set default current_timestamp;

alter table user_profile alter column id set default uuid_generate_v4();
alter table blog_post_status alter column id set default uuid_generate_v4();
alter table blog_post alter column id set default uuid_generate_v4();

insert into blog_post_status (identifier, label) values ('draft', 'Draft');
insert into blog_post_status (identifier, label) values ('published', 'Zveřejněno');
insert into blog_post_status (identifier, label) values ('archived', 'Archivováno');
insert into blog_post_status (identifier, label) values ('to_approve', 'Ke schválení');

create table image (
    id uuid default uuid_generate_v4() primary key,
    name varchar(255) not null,
    file bytea not null,
    keywords varchar(255) not null,
    x_created timestamp not null default current_timestamp

);