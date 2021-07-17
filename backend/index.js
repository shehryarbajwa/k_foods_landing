const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { addOrUpdateFarmer, addOrUpdateBuyOrder } = require("./models/dynamo");
const Generator = require("id-generator");
const g = new Generator();
const moment = require("moment-timezone");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname + "/.." + "/client/build")));

app.get("*", (req, res) => {
  const buildPath = path.join(__dirname + "/.." + "/client/build/index.html");
  res.sendFile(buildPath);
});

app.post("/buy", async (req, res, next) => {
  const { name, contact_number, address, province, product, text } = req.body;

  try {
    await addOrUpdateBuyOrder({
      id: g.newId(),
      name: name,
      contact_number: contact_number,
      address: address,
      province: province,
      product: product,
      text: text,
      order_date: moment().tz("Asia/Karachi").format("MMMM Do YYYY"),
      order_time: moment().tz("Asia/Karachi").format("h:mm:ss a"),
    });
    client.messages
      .create({
        to: '+923218609999',
        from: '+18727048669',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      })
      .then(message => console.log(message.sid));
    
    res.send("Success");
  } catch (err) {
    console.log(err);
  }
});

app.post("/sell", async (req, res, next) => {
  const { name, contact_number, address, province, landsize, text } = req.body;

  try {
    await addOrUpdateFarmer({
      id: g.newId(),
      name: name,
      contact_number: contact_number,
      address: address,
      province: province,
      landsize: landsize,
      text: text,
      signup_date: moment().tz("Asia/Karachi").format("MMMM Do YYYY"),
      signup_time: moment().tz("Asia/Karachi").format("h:mm:ss a")
    });
    client.messages
      .create({
        to: '+923218609999',
        from: '+18727048669',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      })
      .then(message => console.log(message.sid));
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
