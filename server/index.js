require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const products_controller = require("./products_controller");

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(e => console.log(e));

const port = 3002;

app.post("/api/products", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/products/:id", products_controller.getOne);
app.put("/api/products/:id", products_controller.update);
app.delete("/api/products/:id", products_controller.delete);

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
