const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");
const authRoutes = require("./auth");
const htmlRoutes = require("./api/htmlRoutes");
var nodemailer = require('nodemailer');
const creds = require('../config/config');

// API Routes
router.use("/api", apiRoutes);
router.use("/auth", authRoutes);
router.use("/", htmlRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.creds.USER,
    pass: process.env.creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/request', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var originZip = req.body.originZip
  var destinationZip = req.body.destinationZip
  var weight = req.body.weight
  var classification = req.body.classification
  var dimensions = req.body.dimensions
  var pieces = req.body.pieces
  var hazMat = req.body.hazMat
  var specialRequest = req.body.specialRequest
  var specialInstructions = req.body.specialInstructions
  var content = `name: ${name} \n email: ${email} \n originZip: ${content} \n destinationZip: ${content} \n weight: ${content} \n classification: ${content} \n dimensions: ${content} \n pieces: ${content} \n hazMat: ${content} \n specialRequest: ${content} \n specialInstructions: ${content}`


  var mail = {
    from: name,
    to: 'neritasung@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Request Quote Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})



module.exports = router;
