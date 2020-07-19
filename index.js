
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const db = require("./config/mongoose");

const port = 8000;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("assets"));

app.use("/",require("./routes/index"));

app.listen(port, function(err) {
    if(err){console.log(err);return;}
    console.log(`Server started on port ${port}`);
});
