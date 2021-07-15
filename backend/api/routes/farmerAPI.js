const express = require("express");
const farmerRouter = express.Router();

const { addOrUpdateFarmer } = require("../../models/dynamo");

farmerRouter.post("/sell", async (req, res) => {
  const { content, name } = req.body;

  console.log(req.body)

  try {
    await addOrUpdateFarmer(req.body);
    res.send(200).ok();
  } catch (err) {
    console.log(err);
  }
});

module.exports = farmerRouter;
