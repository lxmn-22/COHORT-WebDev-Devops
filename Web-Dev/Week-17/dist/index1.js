"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// async function to insert data into a user table.
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const pgClient = new pg_1.Client({
            user: "neondb_owner",
            password: "add_neondb_password",
            port: 5432,
            host: "ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech",
            database: "neondb",
            ssl: true
        });
        try {
            // establishes client connection.
            yield pgClient.connect();
            // use parameterized query to prevent SQL Injection.
            const insertQuery = "INSERT INTO users(username, email, password) VALUES($1, $2, $3)";
            const values = [username, email, password];
            const result = yield pgClient.query(insertQuery, values);
            // Output Insertion Result.
            console.log("Insertion Success:", result);
        }
        catch (error) {
            console.error("Error during the insertion:", error);
        }
        finally {
            // close the client connection.
            yield pgClient.end();
        }
    });
}
insertData("Aditi Sharma", "aditi@gmail.com", "Aditi@123").catch(console.error);
