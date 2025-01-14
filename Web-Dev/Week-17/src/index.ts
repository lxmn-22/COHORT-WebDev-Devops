import { Client } from "pg";

// Provided the postgre link to the Client as an string.
// const pgClient1 = new Client("postgresql://neondb_owner:9AdSnfT2VLCg@ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

// Providing the db credentials as the object.
const pgClient = new Client({
    // user: "neondb_owner",
    // password: "add_neondb_password",
    // port: 5432,
    // host: "ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech",
    // database: "neondb",
    // ssl: true
});

// connecting to the db is an async event.
async function main() {
    await pgClient.connect();

    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}

main();