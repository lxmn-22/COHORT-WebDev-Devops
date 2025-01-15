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

-- Creating Address Table.
CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    -- "user_id": foreign key that references a user in the users table.
    user_id INTEGER NOT NULL,
    city VARCHAR(30) NOT NULL,
    country VARCHAR(20) NOT NULL,
    pincode VARCHAR(10),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    -- "FOREIGN KEY (user_id)": declares "user_id" as a foreign key.
    -- "REFERENCES users(id)": links "user_id" to the "id" column of the "users" table, 
    -- enforcing referential integrity.
    -- "ON DELETE CASCADE": If a referenced user in the "users" table is deleted, 
    -- all rows in the "addresses" table with that "user_id" are also deleted.
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);