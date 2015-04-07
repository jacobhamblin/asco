# Schema Information

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
url         | string    | not null

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id | integer   | not null, foreign key (references recipient)
follower_id | integer   | not null, foreign key (references issuer)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username	| string    | can be null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
