const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to the database!");
  release();
});

app.get("/", (req, res) => {
  res.send("Tamo online!");
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
