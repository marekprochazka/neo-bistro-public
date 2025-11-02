update menu
set ordering = $2,
    active_from = $3,
    active_to = $4,
    file_data = $5,
    file_name = $6
where id = $1