const express = require('express');
const cors = require('cors');
const configRoutes = require("./routes");

const app = express();
configRoutes(app);

app.listen(process.env.PORT, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:", process.env.PORT);
});