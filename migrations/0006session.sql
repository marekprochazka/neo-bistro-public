-- session

create table session (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid not null references "user_profile",
    token text not null,
    valid_until timestamp not null,
    created_at timestamp not null default current_date
)
