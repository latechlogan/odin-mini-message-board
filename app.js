const express = require("express");
const app = express();
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
