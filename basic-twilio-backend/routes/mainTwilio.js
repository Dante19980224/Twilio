const express = require("express");
const router = express.Router();
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

router.post("/", (req, res) => {
	
	let sms = req.body.message;

  client.messages.create({
    body: sms,
    to: process.env.MY_NUMBER,
    from: process.env.TWILIO_NUMBER_ONE,
  }).then((message) => console.log(`sent message with sid: ${message.sid}`));

	res.json({
    sent: sms
  });
});

module.exports = router;