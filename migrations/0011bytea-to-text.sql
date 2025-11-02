-- bytea-to-text
alter table image alter column data type text using data::text;
