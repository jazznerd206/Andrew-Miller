const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 6969
let nodemailer = require('nodemailer');


const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '206alm',
    pass: 'SHY%nut^'
  }
});

var mailOptions = {
  from: '206alm@gmail.com',
  to: '206alm@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });