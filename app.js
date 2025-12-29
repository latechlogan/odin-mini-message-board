const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
