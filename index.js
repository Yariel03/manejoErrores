const express = require("express");
const app = express();
const cors = require("cors");
const { error404, errorServidor, validarId } = require("./error404");

app.use(cors()).use(express.json());

app
  .get("/", (req, res) => {
    res.status(200).json({ data: "ok" });
  })
  .get("/datos/", validarId, (req, res) => {
    // a + b; generar un error
    const { id } = req.query;
    res.status(200).json({ data: id });
  });

app.use(error404).use(errorServidor);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
