const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const PORT = process.env.PORT || 8080;
let nodemailer = require('nodemailer');

//.env config
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../portfolio/dist')));

app.get('/token', (req, res) => {
  res.json( { key: process.env.REACT_APP_GH_TOKEN } );
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio/dist/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../portfolio/dist"));
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    service:'gmail',
    secure: false,
  auth: {
    user: 'nodemailer999',
    pass: process.env.GMAIL_PASSWORD,
  },
  debug: false,
  logger: true
});

// verifying the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});



app.post('/access', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name}  |  email: ${email} \n message: ${message} `;

  const mail = {
    from: email, 
    to: '206alm@gmail.com', 
    message: message,
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

transporter.close();

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})