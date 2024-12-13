import express from "express";
import { client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new client("postgresql://postgres_practice_owner:c5wiMkX8hfTs@ep-withered-feather-a1bltoti.ap-southeast-1.aws.neon.tech/postgres_practice?sslmode=require")

pgClient.connect();

// Sign-up route.
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const street = req.body.street;
    const country = req.body.country;
    const pincode = req.body.pincode;

    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
        const addressInsertQuery = `INSERT INTO addresses(city, street, country, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`

        await pgClient.query("BEGIN;")

        const response = await pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id;
        const addressResponse = await pgClient.query(addressInsertQuery, [city, street, country, pincode, userId]);

        await pgClient.query("COMMIT;")

        res.json({
            message: "You have signed up."
        })
    } catch(e) {
        console.log(e);

        res.json({
            message: "Error while signing up."
        })
    }
})

app.listen(3000);