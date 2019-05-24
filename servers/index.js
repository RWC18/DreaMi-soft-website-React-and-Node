const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();


const mailgun = require("mailgun-js");
const DOMAIN = "sandboxdee1f7b90019449a9290b1ffa7b2d5ea.mailgun.org";
const mg = mailgun({apiKey: "9b654003e184435e1e9e48ed30fbfcae-52b0ea77-ee22d869", domain: DOMAIN});


const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);

app.post('/api/send-email', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    res.setHeader('Content-Type', 'application/json');
    const data = {
        from: "vahe.minasyan.2000.at@gmail.com",
        to: "vahe.minasyan.2000.at@gmail.com",
        subject: "DM-soft",
        html: `
                <div style="text-align: center; background-color: black; color: lime; width: 100%; padding: 50px">
                <a href="http://localhost:3000/"><img src="https://i.ibb.co/PNkqgLP/Logo-DM.png" alt="Logo-DM" border="0"></a>
                <h1>Message: <span style="font-weight: normal">${message}</span></h1> 
                <h1>Name: <span style="font-weight: normal">${name}</span></h1> 
                <h1>E-Mail: <span style="font-weight: normal; text-decoration: none; color: lime">${email}</span></h1>
                </div>
                `
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
    // console.log(email);
    // const data1 = {
    //     from: "vahe.minasyan.2000.at@gmail.com",
    //     to: email,
    //     subject: "DM-soft",
    //     text: `Thanks for subscribing dear ${name}`
    // };
    // mg.messages().send(data1, function (error, body) {
    //     console.log(body);
    // });
});


app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);
