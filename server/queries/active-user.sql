select up.id as id, email, is_admin, first_name, last_name
from user_profile as up
left join session on up.id = session.user_id
where session.valid_until > now() and session.token = $1
