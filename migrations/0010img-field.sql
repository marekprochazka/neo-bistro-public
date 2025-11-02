-- img-field

drop table if exists image;

create table image(
    id uuid default uuid_generate_v4() primary key,
    data bytea not null,
    name text not null,
    alt text not null,
    metadata text,
    x_created timestamp not null default now()
)
