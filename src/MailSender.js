const mailgun = require("mailgun-js");
const DOMAIN = "sandboxdee1f7b90019449a9290b1ffa7b2d5ea.mailgun.org";
const mg = mailgun({apiKey: "9b654003e184435e1e9e48ed30fbfcae-52b0ea77-ee22d869", domain: DOMAIN});
const data = {
  from: "vahe.minasyan.2000.at@gmail.com",
  to: "vahe.minasyan.2000.at@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});



let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('./index.js');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3001!');
});
