/** Database for lunchly */

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgres://postgres:docker@localhost:5432/lunchly_test";
} else {
  DB_URI = "postgres://postgres:docker@localhost:5432/lunchly";
}

let db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
