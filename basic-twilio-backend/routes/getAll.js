const express = require("express");
const router = express.Router();
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

router.get("/", (req, res) => {

  let messagelist = [];

  client.messages.list({
    limit: 20
  }).then(messages => {
    messages.forEach(m => {
      messagelist.push(m);
      console.log(m);
    })
    res.json({
      messagelist: messagelist
    });
  });
});

module.exports = router;