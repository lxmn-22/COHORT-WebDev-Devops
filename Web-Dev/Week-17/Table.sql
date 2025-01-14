-- Creating UserTable

-- "CREATE TABLE": initiates the creation of new table.
CREATE TABLE users (
    -- "SERIAL": postgreSQL specific data-type for creating an auto-incrementing integer.
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    -- "created_at": store the time-stamp when the user was created.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- "INSERT USER INTO TABLE"
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');

-- "UPDATE Users Attribute"
UPDATE users
SET password = 'new_password', username="new_user_name"
WHERE email = 'user@example.com';

-- "DELETE User from the table"
DELETE FROM users
WHERE id = 1;

-- "DELETE all the users data in a go."
DELETE FROM users;

-- "This query provides me all user data."
SELECT * FROM users;

-- "SELECT User using id to get all the details of the particular user."
SELECT * FROM users
WHERE id = 1;