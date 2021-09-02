require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const getApiFrases = require("./api/frases");

app.use(getApiFrases);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
