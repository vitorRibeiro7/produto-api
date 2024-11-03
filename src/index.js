require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao se conectar com o banco de dados", err.stack);
  }
  console.log("Conexão com o banco de dados estabelecida");
  release();
});

app.get("/", (req, res) => {
  return res.status(200).send("Tamo online!");
});

app.get("/produtos", async (req, res) => {
  const result = await pool.query("SELECT * FROM produtos");
  return res.status(200).json(result.rows);
});

app.get("/produto/:id", async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM produtos WHERE id = $1", [id]);
  return res.status(200).json(...result.rows);
});

app.post("/produto", async (req, res) => {
  const { descricao, preco, estoque, data } = req.body;
  const result = await pool.query(
    "INSERT INTO produtos (descricao, preco, estoque, data) VALUES ($1, $2, $3, $4) RETURNING *",
    [descricao, preco, estoque, data]
  );
  return res.status(201).json(...result.rows);
});

app.put("/produto/:id", async (req, res) => {
  const { id } = req.params;
  const { descricao, preco, estoque, data } = req.body;
  const result = await pool.query(
    "UPDATE produtos SET descricao = $1, preco = $2, estoque = $3, data = $4 WHERE id = $5 RETURNING *",
    [descricao, preco, estoque, data, id]
  );
  return res.status(200).json(...result.rows);
});

app.delete("/produto/:id", async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM produtos WHERE id = $1", [id]);
  return res.status(204).send();
});

// log on console all requests
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.originalUrl}`);
  next();
});

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
});
