import { Client } from "pg";
import express from "express";

// Provided the postgre link to the Client as an string.
// const pgClient1 = new Client("postgresql://neondb_owner:"add_neondb_password"@ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

const app = express();
app.use(express.json());

// Providing the db credentials as the object.
const pgClient = new Client({
    user: "neondb_owner",
    password: "add_neondb_password",
    port: 5432,
    host: "ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});

pgClient.connect();

app.post("/signup", async (req, res) => {
    // user table attributes.
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // address table attributes.
    const city = req.body.city;
    const country = req.body.country;
    const pincode = req.body.pincode;

    try {
        const userInsertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const addressInsertQuery = `INSERT INTO addresses(city, country, pincode, user_id) VALUES ($1, $2, $3, $4);`;

        // "BEGIN" transaction.
        await pgClient.query("BEGIN;")

        const insertResponse = await pgClient.query(userInsertQuery, [username, email, password]);

        // userId will be generated after user added to the table,we accessed it by row index, using id attribute.
        const userId = insertResponse.rows[0].id;

        const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, pincode, userId]);

        // "COMMIT" transaction.
        await pgClient.query("COMMIT;")

        res.json({
            message: "You have signed up"
        })
    } catch(e) {
        console.log(e);
        res.json({
            message: "Error while signing up"
        })
    }
})

app.listen(3000);