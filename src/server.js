require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const port = process.env.APP_PORT || 3333;
app.listen(port, () => {
  console.log(`[app.js] > Server running in ${process.env.APP_URL}:${port}`);
});
