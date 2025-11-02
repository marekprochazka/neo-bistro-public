-- menu_image

create table if not exists menu (
    id uuid default uuid_generate_v4() primary key,
    ordering integer not null,
    active_from timestamp,
    active_to timestamp,
    file_data text,
    file_name text,
    created_at timestamp not null default current_date
)