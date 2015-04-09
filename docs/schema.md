# Schema Information

## images
column name | data type   | details
------------|-------------|-----------------------
id          | integer     | not null, primary key
owner_id    | integer     | not null, foreign key (references users)
curated     | boolean     | default false
url         | string      | not null
description | description | can be null

## followings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
recipient_id      | integer   | not null, foreign key (references recipient)
issuer_id         | integer   | not null, foreign key (references issuer)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | can be null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
avatar          | string    | default url provided
