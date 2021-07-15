const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const farmerRouter = require("./api/routes/farmerAPI");
const buyerRouter = require("./api/routes/buyerAPI");
const indexAPIRouter = require("./api/routes/index");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname + '/..' + "/client/build")));

app.get("*", (req, res) => {
  const buildPath = path.join(__dirname + "/.." + "/client/build/index.html");
  res.sendFile(buildPath);
});

app.use("/sell", farmerRouter);
app.use("/buy", buyerRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
