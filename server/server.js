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
app.use(express.static(path.join(__dirname, '../portfolio/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio/build/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../portfolio/build"));
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
  console.log(`this is a new comment ${name, email, message}`)

  const mail = {
    from: email, 
    to: '206alm@gmail.com', 
    // message: subject,
    text: content
  }
  console.log(`mail json ${mail}`);

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
      console.log('mail fail');
      console.log(err);
    } else {
      res.json({
       status: 'success'
      })
      console.log('mail win')
    }
  })
})

transporter.close();

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });