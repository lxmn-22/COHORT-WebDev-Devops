"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
// Provided the postgre link to the Client as an string.
// const pgClient1 = new Client("postgresql://neondb_owner:"add_neondb_password"@ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Providing the db credentials as the object.
const pgClient = new pg_1.Client({
  user: "neondb_owner",
  password: "9AdSnfT2VLCg",
  port: 5432,
  host: "ep-black-bar-a133tcb7.ap-southeast-1.aws.neon.tech",
  database: "neondb",
  ssl: true,
});
pgClient.connect();
app.post("/signup", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    // user table attributes.
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // address table attributes.
    const city = req.body.city;
    const country = req.body.country;
    const pincode = req.body.pincode;
    try {
      const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
      const insertResponse = yield pgClient.query(insertQuery, [
        username,
        email,
        password,
      ]);
      // userId will be generated after user added to the table,we accessed it by row index, using id attribute.
      const userId = insertResponse.rows[0].id;
      const addressInsertQuery = `INSERT INTO addresses(city, country, pincode, user_id) VALUES ($1, $2, $3, $4);`;
      const addressInsertResponse = yield pgClient.query(addressInsertQuery, [
        city,
        country,
        pincode,
        userId,
      ]);
      res.json({
        message: "You have signed up",
      });
    } catch (e) {
      console.log(e);
      res.json({
        message: "Error while signing up",
      });
    }
  })
);
app.listen(3000);
