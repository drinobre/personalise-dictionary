// Source https://node-postgres.com/guides/project-structure
// Source (Pool content)https://node-postgres.com/features/connecting

// Relevant information to access the database credentials when ususing .env file

import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.database,
  password: config.password,
  port: config.dbPort,
  ssl: { rejectUnauthorized: false }, // why do we need to use this ssl when use Heroku?
});

// Amends for ESModule
export default function query(text, params, callback) {
  return pool.query(text, params, callback);
}
