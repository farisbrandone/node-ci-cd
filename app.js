const express = require("express");

const app = express();

// add the following line near the indexRouter
const personsRouter = require("./routes/person");
const port = process.env.PORT || 3000;
app.set("port", port);

// add the following line near app.use indexRouter
app.use("/persons", personsRouter);

app.listen(3000, () => {
  console.log("server run on port 3000");
});
