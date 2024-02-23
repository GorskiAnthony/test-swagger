const express = require("express");
const cors = require("cors");
const yaml = require("yamljs");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());

const swaggerDocs = yaml.load("./docs/swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/hello", (req, res) => {
  res.send("Hello World from API");
});

module.exports = app;
