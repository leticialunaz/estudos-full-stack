require('dotenv').config();

let express = require('express');
let app = express();


app.use((req, res, next) =>{
    console.log(req.method + " " + req.path +" - " + req.ip);
    next();
})

absolutePath = __dirname + '/views/index.html'


app.get('/', (req, res) => {
    res.sendFile(absolutePath);
})

app.use('/public', express.static(__dirname + '/public'));


app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ "message": "HELLO JSON" });
  } else {
        res.json({ "message": "Hello json" });
  }
})


console.log("Hello World");




































 module.exports = app;
