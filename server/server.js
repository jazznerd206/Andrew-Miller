const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const PORT = process.env.PORT || 8080;
let nodemailer = require('nodemailer');

const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio/build/index.html"));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../portfolio/build"));
}

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//     port: 465,
//     secure: false,
//   auth: {
//     user: '206alm',
//     pass: ''
//   }
// });

// // verifying the connection configuration
// transporter.verify(function(error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages!");
//   }
// });



// app.post('/access', (req, res, next) => {
//   var email = req.body.email;
//   var message = req.body.message;
//   var content = `email: ${email} \n message: ${message} `;
//   console.log(`this is a new comment ${email, message}`)

//   var mail = {
//     from: email, 
//     to: '206alm@gmail.com', 
//     // message: subject,
//     text: content
//   }
//   console.log(`mail json ${mail}`);

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//       console.log('mail fail');
//       console.log(err);
//     } else {
//       res.json({
//        status: 'success'
//       })
//       console.log('mail win')
//     }
//   })
// })

app.listen(PORT, () => {
    console.log(`${PORT}`);
  });