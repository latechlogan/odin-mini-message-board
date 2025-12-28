const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Homepage works!");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
