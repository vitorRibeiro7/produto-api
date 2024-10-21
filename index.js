import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Tamo online!");
});

app.get("produtos", (req, res) => {
  return res.status(200).json({
    produtos: [
      {
        id: 1,
        descricao: "Produto 1",
        preco: 10.0,
        estoque: 20,
        data: "2024-01-01",
      },
      {
        id: 2,
        descricao: "Produto 2",
        preco: 20.0,
        estoque: 10,
        data: "2024-01-01",
      },
    ],
  });
});

app.get("produtos/:id", (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    id: id,
    descricao: `Produto ${id}`,
    preco: 10.0,
    estoque: 20,
    data: "2024-01-01",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
