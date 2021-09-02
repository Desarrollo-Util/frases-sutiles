const express = require("express");
const router = express.Router();
const { readFile } = require("fs/promises");
const { join } = require("path");

router.get("/frase", async (req, res) => {
  const path = join(__dirname, "../resources/frases.json");

  const frasesString = await readFile(path, {
    encoding: "utf-8",
  });

  const { frases } = JSON.parse(frasesString);

  const frase = frases[Math.floor(Math.random() * frases.length)];

  res.send(frase);
});

module.exports = router;
