import { Client } from "pg";

// async function to insert data into a user table.
async function insertData(username: string, email: string, password: string) {
    const pgClient = new Client({
    user: "neondb_owner",
    password: "add_neondb_password",
    port: 5432,
    host: "ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});

    try {
        // establishes client connection.
        await pgClient.connect();

        // use parameterized query to prevent SQL Injection.
        const insertQuery = "INSERT INTO users(username, email, password) VALUES($1, $2, $3)";
        const values = [username, email, password];
        const result = await pgClient.query(insertQuery, values);
        // Output Insertion Result.
        console.log("Insertion Success:", result);
    } catch (error) {
        console.error("Error during the insertion:", error);
    } finally {
        // close the client connection.
        await pgClient.end();
    }
}
insertData("Aditi Sharma","aditi@gmail.com","Aditi@123").catch(console.error);
