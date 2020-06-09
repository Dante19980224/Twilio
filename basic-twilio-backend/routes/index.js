const cors = require('cors');
const bodyParser = require("body-parser");

const mainTwilioRoutes = require("./mainTwilio");
const getAllRoutes = require("./getAll");

var urlList = [];
const whiteList = ['http://localhost:3000'];

var corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

function middlewareONE(req, res, next){
  console.log("----1st log----");
  console.log("REQUEST BODY:\n", req.body);
  console.log("REQUEST URL:\n", req.originalUrl);
  console.log("REQUEST METHOD:\n", req.method);
  next();
}

function middlewareTWO(req,res,next){
  console.log("----2nd log----");
  const index = urlList.findIndex(x => (x.url) === (req.originalUrl));
  if(index === -1){
    var temp = {
      url: req.originalUrl,
      occurrence: 1
    }
    urlList.push(temp);
    console.log(temp);
  } else {
    urlList[index].occurrence = urlList[index].occurrence + 1;
    console.log(urlList[index]);
  }
  next();
}


const constructorMethod = app => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use("/mainTwilio", cors(corsOptions), middlewareONE, middlewareTWO, mainTwilioRoutes);
  app.use("/getAll", cors(corsOptions), middlewareONE, middlewareTWO, getAllRoutes);
  
  app.use("*", cors(corsOptions), middlewareONE, middlewareTWO, (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;