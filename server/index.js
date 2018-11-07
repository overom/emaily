const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ Hibou: "Coucou mon p'tit coeur !" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
